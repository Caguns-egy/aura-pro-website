import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Maximize, 
  Cpu, 
  Eye, 
  ChevronDown,
  ArrowRight,
  PlayCircle,
  Volume2,
  ScanFace,
  Zap,
  Crosshair,
  Sparkles,
  Layers,
  Headphones,
  Magnet,
  Activity,
  Menu,
  X,
  CheckCircle2,
  ShieldCheck,
  Gauge,
  ThermometerSnowflake,
  Wifi,
  Leaf,
  Camera,
  Waves,
  Mic,
  Fingerprint,
  Scan,
  HandMetal
} from 'lucide-react';

// --- CUSTOM HOOKS ---
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);
  const optionsString = JSON.stringify(options);

  useEffect(() => {
    const currentRef = targetRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(currentRef);
      }
    }, { threshold: 0.1, ...JSON.parse(optionsString) });

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [optionsString]);

  return [targetRef, isIntersecting];
};

// --- ELITE ANIMATION COMPONENTS ---
const Reveal = ({ children, delay = 0, direction = 'up', duration = 1000, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver();

  const getTransform = () => {
    switch(direction) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(30px)';
      case 'right': return 'translateX(-30px)';
      case 'scale': return 'scale(0.95)';
      case 'none': return 'translateY(0)';
      default: return 'translateY(30px)';
    }
  };

  return (
    <div 
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        transform: isVisible ? 'translate(0, 0) scale(1)' : getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    }}
  >
    {children}
  </div>
);
};

const ParallaxImage = ({ src, alt, speed = 0.15, className = "", scale = "1.2", axis = "y" }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!imgRef.current) return;
        const parent = imgRef.current.parentElement;
        const rect = parent.getBoundingClientRect();
        
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + (rect.height / 2);
        const distance = (viewportCenter - elementCenter);
        
        const offset = distance * speed;
        
        if (axis === 'x') {
          imgRef.current.style.transform = `translate3d(${offset}px, 0, 0) scale(${scale})`;
        } else {
          imgRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed, scale, axis]);

  return (
    <img 
      ref={imgRef} 
      src={src} 
      alt={alt} 
      className={`absolute inset-0 w-full h-full object-cover will-change-transform ${className}`} 
    />
  );
};

// --- HERO QUANTUM CORE ---
const HeroQuantumCore = () => {
  const mountRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!mountRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    }, { rootMargin: "100px" });
    observer.observe(mountRef.current);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    
    const updateSize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      if (clientWidth === 0 || clientHeight === 0) return;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(updateSize);
    });
    resizeObserver.observe(mountRef.current);
    
    updateSize();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pLight1 = new THREE.PointLight(0x8b5cf6, 10, 50); // Violet
    pLight1.position.set(5, 5, 5);
    scene.add(pLight1);
    
    const pLight2 = new THREE.PointLight(0xf43f5e, 10, 50); // Rose
    pLight2.position.set(-5, -5, 5);
    scene.add(pLight2);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    const innerGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e, emissive: 0xf43f5e, emissiveIntensity: 0.6,
      wireframe: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    const cageGeo = new THREE.OctahedronGeometry(2.6, 1);
    const cageMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.4, metalness: 1, roughness: 0
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cageMesh);

    const rings = [];
    for(let i=0; i<3; i++) {
      const ringGeo = new THREE.TorusGeometry(3.2 + (i * 0.6), 0.02, 16, 48);
      const ringMat = new THREE.MeshBasicMaterial({ 
        color: i % 2 === 0 ? 0x8b5cf6 : 0x38bdf8,
        transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      rings.push({ mesh: ring, speed: (Math.random() - 0.5) * 0.02 });
      coreGroup.add(ring);
    }

    let targetX = 0, targetY = 0;
    const onInteractionMove = (e) => {
      if (!mountRef.current || !isVisibleRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
      const clientY = (e.touches && e.touches.length > 0) ? e.touches[0].clientY : e.clientY;
      if (clientX === undefined || clientY === undefined) return;

      targetX = ((clientX - rect.left) / rect.width) * 2 - 1;
      targetY = -((clientY - rect.top) / rect.height) * 2 + 1;
    };
    
    window.addEventListener('mousemove', onInteractionMove);
    window.addEventListener('touchmove', onInteractionMove, { passive: true });

    let animationId;
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;

      const time = clock.getElapsedTime();
      coreGroup.rotation.y = time * 0.15 + (targetX * 0.3);
      coreGroup.rotation.x = time * 0.1 + (targetY * 0.3);
      innerMesh.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
      cageMesh.rotation.z -= 0.005;

      rings.forEach(ring => {
        ring.mesh.rotation.x += ring.speed;
        ring.mesh.rotation.y += ring.speed;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onInteractionMove);
      window.removeEventListener('touchmove', onInteractionMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      
      innerGeo.dispose(); innerMat.dispose();
      cageGeo.dispose(); cageMat.dispose();
      rings.forEach(r => { r.mesh.geometry.dispose(); r.mesh.material.dispose(); });
      
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.forceContextLoss(); 
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full pointer-events-auto cursor-crosshair">
      <div ref={mountRef} className="absolute inset-0 z-10"></div>
      <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-[spin_10s_linear_infinite] [mask-image:linear-gradient(transparent,white,transparent)] z-0 pointer-events-none scale-105"></div>
      <div className="absolute w-[80%] h-[80%] max-w-[250px] max-h-[250px] bg-violet-600/30 blur-[80px] rounded-full z-0 pointer-events-none"></div>
    </div>
  );
};


// --- GLOBAL 3D BACKGROUNDS ---
const ThreeBackground = () => {
  const mountRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      isVisibleRef.current = window.scrollY < window.innerHeight * 1.5;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x09090b, 0.012); 

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0)); 
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const particleCount = 300; 
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for(let i=0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePos[i3] = (Math.random() - 0.5) * 80; 
      particlePos[i3+1] = (Math.random() * 120) - 100; 
      particlePos[i3+2] = (Math.random() - 0.5) * 60 - 20; 
    }
    
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x8b5cf6, size: 0.15, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    const modules = [];
    const chipGeo = new THREE.BoxGeometry(0.8, 0.8, 0.1);
    const lensNodeGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 8);
    const dataBlockGeo = new THREE.TetrahedronGeometry(0.6, 0);
    
    const hardwareMat = new THREE.MeshPhysicalMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.2, clearcoat: 1.0 });
    const glowingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.4 });

    for (let i = 0; i < 10; i++) { 
      const rand = Math.random();
      let modGeo = chipGeo;
      if(rand > 0.66) modGeo = lensNodeGeo;
      else if(rand > 0.33) modGeo = dataBlockGeo;

      const mod = new THREE.Mesh(modGeo, Math.random() > 0.8 ? glowingMat : hardwareMat);
      mod.position.set((Math.random() - 0.5) * 50, (Math.random() * 140) - 120, (Math.random() - 0.5) * 30 - 10);
      mod.userData = {
        rx: (Math.random() - 0.5) * 0.02, ry: (Math.random() - 0.5) * 0.02, rz: (Math.random() - 0.5) * 0.02,
        startY: mod.position.y, floatSpeed: Math.random() * 2 + 1
      };
      scene.add(mod);
      modules.push(mod);
    }

    camera.position.z = 12;

    let animationFrameId;
    const clock = new THREE.Clock();
    let smoothScrollY = 0;
    let scrollVelocity = 0;
    let lastScrollY = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;

      const elapsedTime = clock.getElapsedTime();
      const currentScroll = window.scrollY;
      const scrollDelta = currentScroll - lastScrollY;
      lastScrollY = currentScroll;
      
      smoothScrollY += (currentScroll - smoothScrollY) * 0.05;
      scrollVelocity += (scrollDelta * 0.02 - scrollVelocity) * 0.1;

      particleSystem.rotation.y = elapsedTime * 0.02;
      particleSystem.position.y = (smoothScrollY * 0.004) % 40; 
      
      modules.forEach((mod, i) => {
        mod.rotation.x += mod.userData.rx + (scrollVelocity * 0.02);
        mod.rotation.y += mod.userData.ry + (scrollVelocity * 0.02);
        mod.rotation.z += mod.userData.rz;
        mod.position.y = mod.userData.startY + Math.sin(elapsedTime * mod.userData.floatSpeed + i) * 1.5;
        if (Math.abs(scrollVelocity) > 0.1) {
           mod.position.x += Math.sin(elapsedTime * 10 + i) * scrollVelocity * 0.2;
        }
      });

      camera.position.y = -(smoothScrollY * 0.008);
      camera.position.z = 12 + (smoothScrollY * 0.001); 
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      particleGeo.dispose(); particleMat.dispose();
      chipGeo.dispose(); lensNodeGeo.dispose(); dataBlockGeo.dispose();
      hardwareMat.dispose(); glowingMat.dispose();
  
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.forceContextLoss();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" aria-hidden="true" />;
};

const AmbientBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
    <div className="absolute top-[-10%] left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-violet-600/20 blur-[80px] md:blur-[120px] rounded-full animate-[float-slow_20s_ease-in-out_infinite]" />
    <div className="absolute top-[40%] right-[-10%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-cyan-600/10 blur-[80px] md:blur-[120px] rounded-full animate-[float-slow_25s_ease-in-out_infinite_reverse]" />
    <div className="absolute bottom-[-10%] left-[20%] w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] bg-rose-600/10 blur-[100px] md:blur-[150px] rounded-full animate-[float-slow_30s_ease-in-out_infinite]" />
  </div>
);

const GlobalThematicParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Used to pause rendering if needed
    }, { rootMargin: "100px" });
    observer.observe(mountRef.current);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const dirLight1 = new THREE.DirectionalLight(0x8b5cf6, 3);
    dirLight1.position.set(10, 10, 10);
    scene.add(dirLight1);
    
    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 3);
    dirLight2.position.set(-10, -10, 10);
    scene.add(dirLight2);

    const items = [];
    const geoChip = new THREE.BoxGeometry(0.8, 0.8, 0.05); 
    const geoLens = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 32); 
    const geoNode = new THREE.IcosahedronGeometry(0.5, 0); 
    const geoRing = new THREE.TorusGeometry(0.6, 0.05, 16, 48);

    const matGlass = new THREE.MeshPhysicalMaterial({
      color: 0xffffff, metalness: 0.2, roughness: 0.1, transmission: 0.9, thickness: 0.5, transparent: true, opacity: 1
    });
    const matWireViolet = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.25 });
    const matWireCyan = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.25 });
    const matSolidDark = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.2 });

    const geometries = [geoChip, geoLens, geoNode, geoRing];
    const materials = [matGlass, matWireViolet, matWireCyan, matSolidDark];

    for (let i = 0; i < 15; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.x = (Math.random() - 0.5) * 35;
      mesh.position.y = (Math.random() - 0.5) * 60; 
      mesh.position.z = (Math.random() - 0.5) * 15 - 5;
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.userData = {
        rx: (Math.random() - 0.5) * 0.01, ry: (Math.random() - 0.5) * 0.01,
        floatSpeed: (Math.random() - 0.5) * 0.02, parallaxFactor: Math.random() * 0.08 + 0.02
      };
      scene.add(mesh);
      items.push(mesh);
    }

    let animationFrameId;
    let lastScrollY = window.scrollY;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      items.forEach(item => {
        item.rotation.x += item.userData.rx;
        item.rotation.y += item.userData.ry;
        item.position.y += item.userData.floatSpeed + (scrollDelta * item.userData.parallaxFactor);

        if (item.position.y > 30) item.position.y = -30;
        if (item.position.y < -30) item.position.y = 30;
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometries.forEach(g => g.dispose());
      materials.forEach(m => m.dispose());
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
         mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.forceContextLoss();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full pointer-events-none mix-blend-screen opacity-40" aria-hidden="true" />;
};

// --- REUSABLE COMPONENTS ---
const Navbar = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled || isMobileMenuOpen ? 'bg-zinc-950/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <div onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} className="flex items-center gap-3 group cursor-pointer relative z-50">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-600 to-rose-600 p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
          <span className="text-xl sm:text-2xl font-black text-white tracking-tighter">AURA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {['Design', 'Hardware', 'Modules'].map((item) => (
            <button 
              key={item} 
              onClick={() => onNavigate(item.toLowerCase())} 
              className={`text-xs lg:text-sm font-semibold transition-colors ${currentPage === item.toLowerCase() ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {item}
            </button>
          ))}
          <div className="h-4 w-px bg-white/10 mx-1 lg:mx-2"></div>
          <button onClick={() => onNavigate('preorder')} className="px-5 py-2 lg:px-6 lg:py-2.5 rounded-full bg-white text-zinc-950 text-xs lg:text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
            Pre-Order
          </button>
        </div>

        <button 
          className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-3xl border-b border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-6 px-6 py-8">
          {['Design', 'Hardware', 'Modules'].map((item) => (
            <button 
              key={item} 
              onClick={() => { onNavigate(item.toLowerCase()); setIsMobileMenuOpen(false); }}
              className={`text-lg font-bold transition-colors ${currentPage === item.toLowerCase() ? 'text-white' : 'text-zinc-300 hover:text-white'}`}
            >
              {item}
            </button>
          ))}
          <div className="w-full h-px bg-white/10 my-2"></div>
          <button onClick={() => { onNavigate('preorder'); setIsMobileMenuOpen(false); }} className="w-full py-4 rounded-full bg-white text-zinc-950 text-base font-bold hover:scale-[1.02] transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
            Pre-Order - $2,999
          </button>
        </div>
      </div>
    </nav>
  );
};

const BentoCard = ({ title, description, icon: Icon, imageSrc, className, highlight }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -6;
    const tiltY = ((x - centerX) / centerX) * 6;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1)`;
    cardRef.current.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border ${highlight ? 'border-violet-500/40 shadow-[0_0_30px_rgba(139,92,246,0.1)]' : 'border-white/5'} overflow-hidden h-full flex flex-col justify-end min-h-[280px] sm:min-h-[320px] will-change-transform ${className}`}
    >
      {imageSrc && (
        <div className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 mix-blend-screen pointer-events-none overflow-hidden">
          <ParallaxImage src={imageSrc} alt={title} speed={0.1} scale="1.1" />
        </div>
      )}
      {!imageSrc && (
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 transform pointer-events-none">
          <Icon className="w-24 h-24 sm:w-32 sm:h-32 text-violet-400" />
        </div>
      )}
      <div className="relative z-10 transition-transform duration-500" style={{ transform: `translateZ(30px)` }}>
        <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${highlight ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]' : 'bg-zinc-800 text-violet-400 border border-white/5'} flex items-center justify-center mb-4 sm:mb-6`}>
          <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// --- HORIZONTAL GALLERY (Main Page sticky X-axis scroll) ---
const HorizontalGallery = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;
    
    const parallaxImages = trackRef.current.querySelectorAll('.gallery-image-parallax');

    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current || !trackRef.current) return;
        const { top, height } = containerRef.current.getBoundingClientRect();
        
        // Calculate progress from 0 to 1 based on how far we've scrolled into the 300vh container
        const maxScrollableDistance = height - window.innerHeight;
        let clampedProgress = 0;
        
        if (top <= 0) {
           clampedProgress = Math.max(0, Math.min(1, -top / maxScrollableDistance));
        }
        
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxScroll = trackWidth - viewportWidth + (viewportWidth * 0.1);
        
        // 1. Move the track sideways based on scroll progress
        trackRef.current.style.transform = `translate3d(${-clampedProgress * maxScroll}px, 0, 0)`;

        // 2. Move the oversized images on the X-axis to create the internal parallax effect
        const parallaxAmount = viewportWidth < 768 ? 50 : 100;
        parallaxImages.forEach(container => {
          container.style.transform = `translate3d(${clampedProgress * parallaxAmount}px, 0, 0)`;
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // height drives the duration of the sticky scroll
    <section ref={containerRef} className="relative h-[300vh] md:h-[400vh] w-full z-20">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 w-full mb-6 sm:mb-12 relative z-10 shrink-0">
           <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">Hardware Innovation.</h2>
           <p className="text-sm sm:text-lg md:text-xl text-zinc-400 mt-2 sm:mt-4 max-w-2xl font-medium">Scroll to explore the cutting-edge modules powering the Aura ecosystem.</p>
        </div>
        <div ref={trackRef} className="flex gap-4 sm:gap-8 px-6 md:px-[10vw] w-max will-change-transform">
          {[
            // 100% RELIABLE UNSPLASH IDS FOR MAIN PAGE
            { img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", title: "Dual 8K Optics." },
            { img: "https://images.unsplash.com/photo-1478358161113-b0e11994a36b?q=80&w=2070&auto=format&fit=crop", title: "Forged Titanium." },
            { img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", title: "Neural Telemetry." },
            { img: "https://images.unsplash.com/photo-1531297172814-af2652ce9301?q=80&w=2070&auto=format&fit=crop", title: "Spatial Audio." },
            { img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop", title: "Haptic Actuators." },
            { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", title: "Power Cell." }
          ].map((item, i) => (
            <div key={i} className="w-[85vw] md:w-[65vw] lg:w-[45vw] h-[45vh] md:h-[55vh] lg:h-[60vh] relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.15)] shrink-0 group">
              
              {/* Oversized container allows the X-axis panning without showing background edges */}
              <div className="gallery-image-parallax absolute top-0 -left-[20%] w-[140%] h-full will-change-transform">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 pointer-events-none" />
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 pointer-events-none">
                <div className="px-3 sm:px-4 py-1.5 bg-violet-500/20 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-violet-200 mb-2 sm:mb-3 inline-block border border-violet-500/30">Module 0{i+1}</div>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- VERTICAL MODULE GALLERY ---
const VerticalModuleGallery = () => {
  // 100% RELIABLE UNSPLASH IDS FOR MODULES PAGE (Different from Main Page)
  const items = [
    { img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2000&auto=format&fit=crop", title: "Dual 8K Optics." },
    { img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2000&auto=format&fit=crop", title: "Forged Titanium." },
    { img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000&auto=format&fit=crop", title: "Neural Telemetry." },
    { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000&auto=format&fit=crop", title: "Spatial Audio." },
    { img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop", title: "Haptic Actuators." },
    { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop", title: "Power Cell." }
  ];

  return (
    <section className="relative py-24 sm:py-32 px-6 w-full z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 sm:mb-24 text-center sm:text-left">
           <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">Hardware Innovation.</h2>
           <p className="text-sm sm:text-lg md:text-xl text-zinc-400 mt-4 max-w-2xl font-medium mx-auto sm:mx-0">Explore the cutting-edge modules powering the Aura ecosystem.</p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {items.map((item, i) => (
            <Reveal key={i} delay={i % 2 === 0 ? 0 : 200} className={i % 2 !== 0 ? "md:mt-24" : ""}>
              <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.1)] group">
                <ParallaxImage src={item.img} alt={item.title} speed={0.15} scale="1.2" className="group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10">
                  <div className="px-4 py-2 bg-violet-500/20 backdrop-blur-md rounded-full text-xs font-bold text-violet-200 mb-4 inline-block border border-violet-500/30">Module 0{i+1}</div>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="relative pt-24 sm:pt-32 pb-12 px-6 border-t border-white/5 overflow-hidden z-10 bg-transparent w-full">
    <div className="absolute bottom-[-100px] sm:bottom-[-200px] left-1/2 -translate-x-1/2 w-[150vw] md:w-[800px] h-[300px] sm:h-[400px] bg-violet-600/10 blur-[150px] sm:blur-[200px] -z-10 rounded-full" />
      
    <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 sm:gap-16 mb-16 sm:mb-20">
      <Reveal className="max-w-sm md:max-w-xs lg:max-w-sm">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-600 to-rose-600 p-[1px]">
            <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
          <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter">AURA</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6 sm:mb-8 leading-relaxed">
          Pioneering the next frontier of human-computer interaction through advanced spatial computing.
        </p>
      </Reveal>

      <Reveal className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 w-full md:w-auto" delay={200}>
        <div>
          <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-xs sm:text-sm uppercase">Hardware</h4>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-400 font-medium">
            <li><a href="#" className="hover:text-violet-400 transition-colors">Headset</a></li>
            <li><a href="#" className="hover:text-violet-400 transition-colors">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-xs sm:text-sm uppercase">Software</h4>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Aura OS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Developers</a></li>
          </ul>
        </div>
      </Reveal>
    </div>

    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-zinc-600 gap-4 font-medium">
      <div>© 2026 Aura Technologies, Inc. All rights reserved.</div>
    </div>
  </footer>
);

// --- THE MAIN HOMEPAGE ---
const HomePage = ({ onNavigate }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="relative min-h-[100svh] px-4 sm:px-6 overflow-visible flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 flex-1">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-8 pb-4 lg:py-20 z-10 lg:mt-0 xl:pr-10">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-violet-500/10 border border-violet-500/30 mb-4 sm:mb-6 lg:mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-violet-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-violet-200">Aura Pro Available Now</span>
              </div>
            </Reveal>
            
            <Reveal delay={150}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-black text-white tracking-tighter mb-4 sm:mb-6 leading-[1.05] lg:leading-[0.95] break-words">
                Infinite <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#a78bfa,45%,#f472b6,55%,#fb7185)] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  Realities.
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-10 lg:mb-12 leading-relaxed font-medium">
                Experience the next evolution of computing. Aura Pro seamlessly integrates your digital workspace into the physical world with unparalleled clarity and zero-latency tracking.
              </p>
            </Reveal>

            <Reveal delay={450} className="w-full flex justify-center lg:justify-start">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <button onClick={() => onNavigate('preorder')} className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-zinc-950 font-bold text-sm sm:text-base hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]">
                  Pre-Order - $2,999
                </button>
                <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-white/10 text-white font-bold text-sm sm:text-base hover:bg-zinc-800 transition-all hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 group">
                  <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 group-hover:text-violet-300" />
                  Watch Demo
                </button>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={400} direction="scale" className="w-full flex items-center justify-center relative z-20">
            <div className="relative w-full flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[550px] max-w-[550px]">
              <div className="absolute top-[10%] right-[10%] lg:right-[0%] animate-[bounce_3s_ease-in-out_infinite] z-30 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-xl">
                <Cpu className="w-3 h-3 text-cyan-400" /> 12ms Latency
              </div>
              <div className="absolute bottom-[20%] left-[5%] animate-[bounce_4s_ease-in-out_infinite_0.5s] z-30 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-xl">
                <Eye className="w-3 h-3 text-violet-400" /> Dual 8K
              </div>
              <div className="absolute top-[30%] left-[0%] animate-[bounce_3.5s_ease-in-out_infinite_1s] z-30 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-xl">
                <Activity className="w-3 h-3 text-rose-400" /> Neural Tracking
              </div>

              <div className="w-full h-full aspect-square pointer-events-auto relative">
                <HeroQuantumCore />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={800} direction="none" className="absolute bottom-4 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white animate-bounce" />
        </Reveal>
      </section>

      <div className="relative bg-zinc-950/70 backdrop-blur-[20px] z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Updated Main Page Horizontal Gallery with true sticky scrolling */}
        <HorizontalGallery />

        <section className="relative w-full h-[80vh] md:h-[100vh] lg:h-[120vh] overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 z-0">
            <ParallaxImage src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Infinite Canvas" speed={0.25} scale="1.3" className="opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
          </div>

          <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-6 leading-tight break-words">
                Infinite <br/><span className="text-violet-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]">Canvas.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-medium mb-6 sm:mb-10">
                Your physical environment is no longer a limitation. Spawn hundreds of 4K displays, anchor 3D models to your desk, and collaborate as holograms.
              </p>
              <button onClick={() => onNavigate('design')} className="flex items-center gap-3 sm:gap-4 text-white font-bold text-base sm:text-lg group cursor-pointer w-max hover:text-violet-300 transition-colors">
                Explore Aura OS <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 group-hover:translate-x-3 transition-transform" />
              </button>
            </Reveal>
          </div>
        </section>

        <section id="modules" className="relative py-20 sm:py-32 px-6 z-10 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-12 sm:mb-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-6">Modular by design.</h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-medium max-w-2xl mx-auto">Aura Pro adapts to your unique anatomy. Every contact point is magnetically attached, easily swappable, and endlessly customizable.</p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
              <Reveal direction="right" className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(139,92,246,0.1)] bg-zinc-900">
                <ParallaxImage src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop" alt="VR Headset Module" speed={0.15} scale="1.15" axis="x" className="opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-10 z-10">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-zinc-900/80 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-bold text-white mb-2 sm:mb-4">
                      <ScanFace className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" /> True-Depth Mapping
                    </div>
                   <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">Physical form. <br/>Digital soul.</h3>
                </div>
              </Reveal>

              <div className="flex flex-col gap-4 sm:gap-6 h-full justify-center">
                <Reveal delay={0} direction="left" className="h-full">
                  <div className="h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center group hover:bg-zinc-800 hover:border-violet-500/40 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">Magnetic Light Seal</h3>
                      <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">Conforms perfectly to your face, blocking stray light. Swaps instantly via rare-earth magnets.</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={150} direction="left" className="h-full">
                  <div className="h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center group hover:bg-zinc-800 hover:border-cyan-500/40 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">Spatial Audio Straps</h3>
                      <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">Integrated dual-driver audio pods provide rich surround sound while keeping you aware of reality.</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={300} direction="left" className="h-full">
                  <div className="h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center group hover:bg-zinc-800 hover:border-rose-500/40 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Magnet className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">Aerospace Alloy Hub</h3>
                      <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">The central chassis houses the M4 Neural chip, locking all components together seamlessly.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="materials" className="relative py-20 sm:py-40 px-6 overflow-hidden z-10 border-b border-white/5">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150vw] sm:w-[800px] h-[150vw] sm:h-[800px] max-w-full opacity-20 pointer-events-none mix-blend-screen mask-image-l">
            <ParallaxImage src="https://images.unsplash.com/photo-1523961131990-521072f16b68?q=80&w=2070&auto=format&fit=crop" alt="Abstract Materials" speed={0.1} scale="1.1" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center">
            <Reveal className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8" direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-zinc-900 border border-white/10 text-[10px] sm:text-sm font-bold text-zinc-300">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" /> Aerospace Materials
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">Forged from <br/>Titanium.</h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                We sourced aerospace-grade titanium to construct a chassis that is remarkably strong yet virtually weightless. The singular front glass is polished to an optical-grade finish, acting as both a lens and a protective shield for the advanced sensor array.
              </p>
            </Reveal>
            
            <Reveal className="flex-1 w-full" delay={200} direction="left">
              <div className="aspect-[4/5] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.15)] group">
                <ParallaxImage src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2070&auto=format&fit=crop" alt="Hardware Close up" speed={0.15} scale="1.2" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10 pointer-events-none">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">Precision Machined</h4>
                  <p className="text-xs sm:text-sm md:text-base text-zinc-400">Tolerances measured in microns.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="hardware" className="relative py-20 sm:py-40 px-6 z-10">
          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal className="mb-12 sm:mb-24 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-8">Unprecedented Power.</h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">Custom silicon and revolutionary optics combine to deliver an experience that defies logic. Welcome to the era of spatial computing.</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10 auto-rows-auto md:auto-rows-[300px] lg:auto-rows-[320px]">
              <Reveal className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 h-full" delay={0}>
                <BentoCard title="Dual 8K Micro-OLED" description="23.5 million pixels per eye. True black levels and 120Hz dynamic refresh rates make digital objects completely indistinguishable from reality." icon={Eye} imageSrc="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2000&auto=format&fit=crop" highlight={true} />
              </Reveal>
              <Reveal className="col-span-1 md:col-span-2 lg:col-span-2 h-full" delay={100}>
                <BentoCard title="Aura M4 Neural Silicon" description="A 12-core CPU, 16-core GPU, and a dedicated 32-core NPU process data from 12 cameras at 12ms latency." icon={Cpu} />
              </Reveal>
              <Reveal className="col-span-1 md:col-span-1 lg:col-span-1 h-full" delay={200}>
                <BentoCard title="Acoustic Ray Tracing" description="Six audio drivers map sound to the physical geometry of your room." icon={Volume2} />
              </Reveal>
              <Reveal className="col-span-1 md:col-span-1 lg:col-span-1 h-full" delay={300}>
                <BentoCard title="Iris ID Security" description="Invisible LEDs scan your iris patterns for instant biometric unlocking." icon={ScanFace} />
              </Reveal>
              <Reveal className="col-span-1 md:col-span-2 lg:col-span-2 h-full" delay={400}>
                <BentoCard title="LiDAR & Spatial Mapping" description="Real-time meshing of your environment allows digital objects to cast realistic shadows behind real-world furniture." icon={Crosshair} />
              </Reveal>
              <Reveal className="col-span-1 md:col-span-2 lg:col-span-2 h-full" delay={500}>
                <BentoCard title="Hot-Swappable Power" description="The braided magnetic tether connects to an aluminum battery pack, offering 4 hours of intense spatial computing." icon={Zap} />
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

// --- DEDICATED EXPANDED PAGES ---
const DesignPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="relative bg-zinc-950/70 backdrop-blur-[20px] z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.5)] min-h-[100svh] pt-24 overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="sticky top-0 w-full h-screen">
          <GlobalThematicParticles />
        </div>
      </div>
      
      {/* Existing Titanium Section */}
      <section className="relative py-20 px-6 z-10 flex-grow border-b border-white/5">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150vw] sm:w-[800px] h-[150vw] sm:h-[800px] max-w-full opacity-20 pointer-events-none mix-blend-screen mask-image-l">
          <ParallaxImage src="https://images.unsplash.com/photo-1523961131990-521072f16b68?q=80&w=2070&auto=format&fit=crop" alt="Abstract Materials" speed={0.1} scale="1.1" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center">
          <Reveal className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8" direction="right">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-zinc-900 border border-white/10 text-[10px] sm:text-sm font-bold text-zinc-300">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" /> Aerospace Materials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">Forged from <br/>Titanium.</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
              We sourced aerospace-grade titanium to construct a chassis that is remarkably strong yet virtually weightless. The singular front glass is polished to an optical-grade finish, acting as both a lens and a protective shield for the advanced sensor array.
            </p>
          </Reveal>
          <Reveal className="flex-1 w-full" delay={200} direction="left">
            <div className="aspect-[4/5] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.15)] group">
              <ParallaxImage src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2070&auto=format&fit=crop" alt="Hardware Close up" speed={0.15} scale="1.2" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10 pointer-events-none">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">Precision Machined</h4>
                <p className="text-xs sm:text-sm md:text-base text-zinc-400">Tolerances measured in microns.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEW: Canvas of Curved Glass Section */}
      <section className="relative py-20 px-6 z-10 flex-grow border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center">
          <Reveal className="flex-1 w-full" direction="right">
            <div className="aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.1)] group">
              <ParallaxImage src="https://images.unsplash.com/photo-1478358161113-b0e11994a36b?q=80&w=2070&auto=format&fit=crop" alt="Glass" speed={0.1} scale="1.1" className="opacity-80" />
            </div>
          </Reveal>
          <Reveal className="flex-1 space-y-4 sm:space-y-6" direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">A Canvas of <br/>Curved Glass.</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              The front of Aura Pro is a singular piece of three-dimensionally formed laminated glass. It's polished to an optical fit, serving as a lens for the array of cameras and sensors housed within.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              Beneath the glass lies a custom curved OLED display that projects your eyes to the outside world, creating a seamless connection between you and those around you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NEW: Ergonomic Architecture Section */}
      <section className="relative py-20 px-6 z-10 flex-grow border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row-reverse gap-10 sm:gap-16 lg:gap-20 items-center">
          <Reveal className="flex-1 space-y-4 sm:space-y-6" direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Ergonomic <br/>Architecture.</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              Comfort is critical for extended spatial computing sessions. We mapped thousands of cranial profiles to perfectly distribute the lightweight chassis across your face.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-300 font-medium">
                 <CheckCircle2 className="w-5 h-5 text-violet-400" /> Breathable Woven Acoustic Fabric
              </li>
              <li className="flex items-center gap-3 text-zinc-300 font-medium">
                 <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Dial-to-Fit Micro-Adjustment
              </li>
              <li className="flex items-center gap-3 text-zinc-300 font-medium">
                 <CheckCircle2 className="w-5 h-5 text-rose-400" /> Thermal-Dispersing Aluminum Core
              </li>
            </ul>
          </Reveal>
          <Reveal className="flex-1 w-full" delay={200} direction="right">
            <div className="aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(6,182,212,0.1)] group bg-zinc-900">
              <ParallaxImage src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop" alt="Ergonomics" speed={0.1} scale="1.1" className="opacity-80" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEW: Thermal Management */}
      <section className="relative py-20 px-6 z-10 flex-grow border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Reveal>
             <ThermometerSnowflake className="w-16 h-16 text-cyan-400 mx-auto mb-6 opacity-80" />
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">Whisper-Quiet <br/>Thermals.</h2>
             <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
               Processing 23 million pixels requires immense power. Our custom micro-blower system draws cool air from the bottom vents and silently exhausts it through the top frame, keeping both the silicon and your face perfectly cool.
             </p>
          </Reveal>
        </div>
      </section>

      {/* NEW: Sustainability Section */}
      <section className="relative py-24 px-6 z-10">
         <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16">
               <Leaf className="w-12 h-12 text-emerald-400 mx-auto mb-6 opacity-80" />
               <h3 className="text-3xl md:text-5xl font-black text-white">Consciously Crafted.</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <Reveal delay={100} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md">
                 <div className="text-4xl font-black text-white mb-2">100%</div>
                 <div className="text-zinc-400 font-medium">Recycled Titanium Frame</div>
               </Reveal>
               <Reveal delay={200} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md">
                 <div className="text-4xl font-black text-white mb-2">0%</div>
                 <div className="text-zinc-400 font-medium">Single-Use Plastics in Packaging</div>
               </Reveal>
               <Reveal delay={300} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md">
                 <div className="text-4xl font-black text-white mb-2">100%</div>
                 <div className="text-zinc-400 font-medium">Recycled Rare-Earth Elements</div>
               </Reveal>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

const HardwarePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="relative bg-zinc-950/70 backdrop-blur-[20px] z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.5)] min-h-[100svh] pt-24 overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="sticky top-0 w-full h-screen">
          <GlobalThematicParticles />
        </div>
      </div>
      
      {/* Existing Hardware Bento Grid */}
      <section className="relative py-20 px-6 z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-8">
              Unprecedented Power.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
              Custom silicon and revolutionary optics combine to deliver an experience that defies logic. Welcome to the era of spatial computing.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10 auto-rows-auto md:auto-rows-[300px] lg:auto-rows-[320px]">
            <Reveal className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 h-full" delay={0}>
              <BentoCard title="Dual 8K Micro-OLED" description="23.5 million pixels per eye. True black levels and 120Hz dynamic refresh rates make digital objects completely indistinguishable from reality." icon={Eye} imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" highlight={true} />
            </Reveal>
            <Reveal className="col-span-1 md:col-span-2 lg:col-span-2 h-full" delay={100}>
              <BentoCard title="Aura M4 Neural Silicon" description="A 12-core CPU, 16-core GPU, and a dedicated 32-core NPU process data from 12 cameras at 12ms latency." icon={Cpu} />
            </Reveal>
            <Reveal className="col-span-1 md:col-span-1 lg:col-span-1 h-full" delay={200}>
              <BentoCard title="Acoustic Ray Tracing" description="Six audio drivers map sound to the physical geometry of your room." icon={Volume2} />
            </Reveal>
            <Reveal className="col-span-1 md:col-span-1 lg:col-span-1 h-full" delay={300}>
              <BentoCard title="Iris ID Security" description="Invisible LEDs scan your iris patterns for instant biometric unlocking." icon={ScanFace} />
            </Reveal>
            <Reveal className="col-span-1 md:col-span-2 lg:col-span-2 h-full" delay={400}>
              <BentoCard title="LiDAR & Spatial Mapping" description="Real-time meshing of your environment allows digital objects to cast realistic shadows behind real-world furniture." icon={Crosshair} />
            </Reveal>
            <Reveal className="col-span-1 md:col-span-2 lg:col-span-2 h-full" delay={500}>
              <BentoCard title="Hot-Swappable Power" description="The braided magnetic tether connects to an aluminum battery pack, offering 4 hours of intense spatial computing." icon={Zap} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEW: Sensor Array Section */}
      <section className="relative py-20 px-6 z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">A Bionic Array.</h2>
             <p className="text-zinc-400 text-lg">More sensors than any device ever created, working in perfect unison to digitize your reality in real-time.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             <Reveal delay={0} className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
               <Camera className="w-8 h-8 text-violet-400 mx-auto mb-4" />
               <h4 className="text-white font-bold mb-1">12 Cameras</h4>
               <p className="text-xs text-zinc-500">High-res passthrough</p>
             </Reveal>
             <Reveal delay={100} className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
               <Waves className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
               <h4 className="text-white font-bold mb-1">LiDAR Scanner</h4>
               <p className="text-xs text-zinc-500">Real-time 3D meshing</p>
             </Reveal>
             <Reveal delay={200} className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
               <Mic className="w-8 h-8 text-rose-400 mx-auto mb-4" />
               <h4 className="text-white font-bold mb-1">6 Microphones</h4>
               <p className="text-xs text-zinc-500">Directional beamforming</p>
             </Reveal>
             <Reveal delay={300} className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
               <Fingerprint className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
               <h4 className="text-white font-bold mb-1">Iris Tracking</h4>
               <p className="text-xs text-zinc-500">Biometric security</p>
             </Reveal>
          </div>
        </div>
      </section>

      {/* NEW: Dual-Chip Symphony Section */}
      <section className="relative py-20 px-6 z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center">
          <Reveal className="flex-1 space-y-4 sm:space-y-6" direction="right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Dual-Chip <br/>Symphony.</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              Aura Pro is powered by a revolutionary dual-chip design. The primary M4 processor handles complex computations, rendering 3D graphics, and running Aura OS with absolute fluidity.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
              Working in parallel, the specialized R1 sensory co-processor streams data from 12 cameras, 5 sensors, and 6 microphones with a microscopic 12-millisecond photon-to-photon latency—virtually eliminating motion sickness.
            </p>
          </Reveal>
          <Reveal className="flex-1 w-full" delay={200} direction="left">
            <div className="aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.1)] group bg-zinc-900 p-8 flex items-center justify-center gap-8">
               <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                  <Cpu className="w-10 h-10 text-violet-400 mb-2 z-10" />
                  <span className="text-white font-bold z-10">M4 Core</span>
                  <div className="absolute inset-0 bg-violet-500/20 blur-xl"></div>
               </div>
               <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                  <Activity className="w-8 h-8 text-cyan-400 mb-2 z-10" />
                  <span className="text-white font-bold text-sm z-10">R1 Sensor</span>
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl"></div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEW: Performance Stats Section */}
      <section className="relative py-20 px-6 z-10 border-b border-white/5">
         <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16">
               <h3 className="text-3xl md:text-5xl font-black text-white">Silicon Performance.</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <Reveal delay={100} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-cyan-500/40 transition-colors">
                 <Gauge className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                 <div className="text-5xl font-black text-white mb-2">12ms</div>
                 <div className="text-zinc-400 font-medium">Photon-to-Photon Latency</div>
               </Reveal>
               <Reveal delay={200} className="p-8 rounded-3xl bg-zinc-900/50 border border-violet-500/20 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:border-violet-500/40 transition-colors">
                 <Eye className="w-12 h-12 text-violet-400 mx-auto mb-6" />
                 <div className="text-5xl font-black text-white mb-2">23.5M</div>
                 <div className="text-zinc-400 font-medium">Pixels Per Eye</div>
               </Reveal>
               <Reveal delay={300} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-rose-500/40 transition-colors">
                 <Zap className="w-12 h-12 text-rose-400 mx-auto mb-6" />
                 <div className="text-5xl font-black text-white mb-2">120Hz</div>
                 <div className="text-zinc-400 font-medium">Dynamic Refresh Rate</div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* NEW: Connectivity Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Reveal>
             <Wifi className="w-16 h-16 text-emerald-400 mx-auto mb-6 opacity-80" />
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">Zero-Lag <br/>Wireless.</h2>
             <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
               Featuring Wi-Fi 7 and a custom proprietary ultra-wideband chip, Aura Pro can wirelessly beam 4K displays from your Mac directly into your field of view with virtually no latency. 
             </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ModulesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="relative bg-zinc-950/70 backdrop-blur-[20px] z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.5)] min-h-[100svh] pt-24 overflow-hidden flex flex-col justify-between">
      <VerticalModuleGallery />
      
      <section className="relative py-20 px-6 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-12 sm:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-6">
              Modular by design.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
              Aura Pro adapts to your unique anatomy. Every contact point is magnetically attached, easily swappable, and endlessly customizable.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            <Reveal direction="right" className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(139,92,246,0.1)] bg-zinc-900">
              <ParallaxImage src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop" alt="Magnetic Attachments" speed={0.15} scale="1.15" className="opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-6 left-6 z-10">
                 <h3 className="text-xl sm:text-3xl font-bold text-white">Snap & Go <br/>Ecosystem.</h3>
              </div>
            </Reveal>
            <div className="flex flex-col gap-4 sm:gap-6 h-full justify-center">
              <Reveal delay={0} direction="left" className="h-full">
                <div className="h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center hover:bg-zinc-800 hover:border-violet-500/40 transition-all duration-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">Magnetic Light Seal</h3>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400">Conforms perfectly to your face, blocking stray light. Swaps instantly via rare-earth magnets.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150} direction="left" className="h-full">
                <div className="h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center hover:bg-zinc-800 hover:border-cyan-500/40 transition-all duration-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                    <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">Spatial Audio Straps</h3>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400">Integrated dual-driver audio pods provide rich surround sound while keeping you aware of reality.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300} direction="left" className="h-full">
                <div className="h-full rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900/60 border border-white/5 p-5 sm:p-8 flex gap-4 sm:gap-6 items-center hover:bg-zinc-800 hover:border-rose-500/40 transition-all duration-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">Zeiss Optical Inserts</h3>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400">Custom prescription lenses magnetically snap into place, ensuring absolute visual clarity.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Face Scanning / Custom Fit Section */}
      <section className="relative py-20 px-6 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center">
          <Reveal className="flex-1 w-full" direction="right">
            <div className="aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(139,92,246,0.1)] group bg-zinc-900">
              <ParallaxImage src="https://images.unsplash.com/photo-1531297172814-af2652ce9301?q=80&w=2070&auto=format&fit=crop" alt="Face Scan" speed={0.1} scale="1.1" className="opacity-40 mix-blend-screen" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Scan className="w-20 h-20 text-cyan-400 opacity-80 animate-pulse" />
              </div>
            </div>
          </Reveal>
          <Reveal className="flex-1 space-y-4 sm:space-y-6" direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-[10px] sm:text-sm font-bold text-zinc-300">
              <Scan className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" /> True-Depth Mapping
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Your Unique <br/>Geometry.</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              No two faces are alike. Before your Aura Pro ships, you'll use the Aura Companion App to perform a microscopic True-Depth scan of your facial geometry.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              We use this data to select the exact Light Seal and Head Band sizes tailored specifically for your brow curvature and cheekbone structure, ensuring zero light leakage and infinite comfort.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Haptic Accessories Section */}
      <section className="relative py-20 px-6 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row-reverse gap-10 sm:gap-16 lg:gap-20 items-center">
          <Reveal className="flex-1 space-y-4 sm:space-y-6" direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-[10px] sm:text-sm font-bold text-zinc-300">
              <HandMetal className="w-3 h-3 sm:w-4 sm:h-4 text-rose-400" /> Physical Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Feel the <br/>Digital World.</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              While Aura Pro relies entirely on your hands and eyes for navigation, the modular ecosystem extends to physical accessories.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              Snap on our advanced Haptic Gloves or pair third-party styluses via Bluetooth 5.3 to literally feel the resistance, texture, and weight of 3D objects you interact with in the Aura OS.
            </p>
          </Reveal>
          <Reveal className="flex-1 w-full" delay={200} direction="right">
            <div className="aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(244,63,94,0.1)] group bg-zinc-900">
              <ParallaxImage src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" alt="Haptics" speed={0.1} scale="1.1" className="opacity-80" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Battery Deep Dive */}
      <section className="relative py-20 px-6 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center">
          <Reveal className="flex-1 space-y-4 sm:space-y-6" direction="right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Hot-Swappable <br/>Energy.</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              To keep the headset impossibly light, we moved the heavy batteries off your face. The braided magnetic power tether connects to an aerospace-grade aluminum power bank you keep in your pocket.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
              Running low? Unplug the battery and plug in a fresh one. A small internal capacitor keeps the headset running for 2 minutes while you swap, ensuring you never lose your flow.
            </p>
          </Reveal>
          <Reveal className="flex-1 w-full" delay={200} direction="left">
            <div className="aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(244,63,94,0.1)] group bg-zinc-900">
              <ParallaxImage src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Battery Module" speed={0.1} scale="1.1" className="opacity-80" />
              <div className="absolute bottom-6 right-6">
                 <div className="px-4 py-2 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
                   <Zap className="w-4 h-4 text-rose-400" /> <span className="text-white font-bold text-sm">4 Hour Capacity</span>
                 </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// --- PRE ORDER PAGE ---
const PreOrderPage = ({ onNavigate }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="relative pt-32 pb-24 px-6 max-w-2xl mx-auto min-h-[100svh] z-10 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent blur-3xl z-0" />
        
        <Reveal className="relative z-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
             <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-violet-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">Reservation Secured.</h1>
          <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 max-w-lg mx-auto">
            Welcome to the future. We've sent a confirmation email with your queue position and next steps.
          </p>
          <button 
            onClick={() => onNavigate('home')} 
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-white text-zinc-950 font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Return to Homepage
          </button>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="relative pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto min-h-[100svh] z-10 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full items-start">
        <Reveal direction="right">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-xs font-bold text-violet-200 mb-6">
             <Activity className="w-3 h-3" /> Secure Your Spot
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
            Step into the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-rose-400">Future.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-8 sm:mb-10 max-w-md">
            Aura Pro is currently in high demand. Secure your priority spot in line today. No financial commitment required until shipping begins in Fall 2026.
          </p>
          
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
               <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-zinc-800 shrink-0 relative border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 mix-blend-screen" alt="Aura Pro" />
               </div>
               <div>
                 <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">Aura Pro System</h3>
                 <p className="text-xs sm:text-sm text-zinc-400 mt-1 mb-2">Includes Headset, Light Seal, Dual Audio Straps, and Battery.</p>
                 <div className="text-lg sm:text-xl font-black text-white">$2,999</div>
               </div>
            </div>
            
            <div className="space-y-3 pt-5 border-t border-white/10">
               <div className="flex justify-between text-xs sm:text-sm font-medium">
                 <span className="text-zinc-400">Expected Delivery</span>
                 <span className="text-white">Fall 2026</span>
               </div>
               <div className="flex justify-between text-xs sm:text-sm font-medium">
                 <span className="text-zinc-400">Due Today</span>
                 <span className="text-emerald-400 font-bold">$0.00</span>
               </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={200}>
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-[2rem] bg-zinc-900/60 border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 tracking-tight">Reservation Details</h2>
             
             <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                   <div className="space-y-2">
                     <label className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1">First Name</label>
                     <input required type="text" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" placeholder="Jane" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1">Last Name</label>
                     <input required type="text" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" placeholder="Doe" />
                   </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1">Email Address</label>
                   <input required type="email" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" placeholder="jane@example.com" />
                </div>
                
                <div className="space-y-2 relative">
                   <label className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1">Storage Capacity</label>
                   <select className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all appearance-none cursor-pointer">
                      <option value="512">512GB Base (Included)</option>
                      <option value="1024">1TB (+$200)</option>
                      <option value="2048">2TB (+$400)</option>
                   </select>
                   <ChevronDown className="absolute right-4 bottom-3 sm:bottom-3.5 w-5 h-5 text-zinc-400 pointer-events-none" />
                </div>
             </div>
             
             <button type="submit" className="w-full mt-8 sm:mt-10 px-6 py-3.5 sm:py-4 rounded-xl bg-white text-zinc-950 font-bold text-base sm:text-lg hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                Confirm Reservation
             </button>
             
             <p className="text-center text-[10px] sm:text-xs text-zinc-500 mt-4 sm:mt-6 px-4">
               By confirming, you agree to our <a href="#" className="underline hover:text-zinc-300">Terms of Service</a>. No credit card required today.
             </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

// --- MAIN APP (State Router) ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-200 selection:bg-violet-500/30 selection:text-violet-200 overflow-x-clip">
      
      {/* Persistent Backgrounds */}
      <ThreeBackground />
      <AmbientBackground />
      
      {/* Global Particles overlay (only shown when not on home page to avoid overlapping the Hero) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000" 
        style={{ opacity: currentPage === 'home' ? 0 : 1 }}
      >
         <GlobalThematicParticles />
      </div>

      {/* Global Navbar */}
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      {/* Basic state-based Router */}
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'design' && <DesignPage />}
      {currentPage === 'hardware' && <HardwarePage />}
      {currentPage === 'modules' && <ModulesPage />}
      {currentPage === 'preorder' && <PreOrderPage onNavigate={setCurrentPage} />}
      
      {/* Global CSS for utilities */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes gradient { 
          0% { background-position: 0% 50%; } 
          100% { background-position: -200% 50%; } 
        }
        .mask-image-b { mask-image: linear-gradient(to bottom, black 50%, transparent 100%); }
        .mask-image-l { mask-image: linear-gradient(to left, black 20%, transparent 100%); }
        body { background-color: #09090b; color: white; margin: 0; padding: 0; }
      `}} />
    </div>
  );
}