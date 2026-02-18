'use client';

import { Card } from '@/components/ui/card';
import { Layout, Target, ChevronUp, MessageCircle, CircleUser } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect, useCallback } from 'react';

type Post = {
  id: number;
  columnId: string;
  image: string;
};

type ManagedPost = {
  id: number;
  title: string;
  description: string;
  status: 'backlog' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  product: 'web-app' | 'mobile-app' | 'api';
  board: 'feature-request' | 'bug-report' | 'improvement';
  votes: number;
  tags: string[];
  comments: number;
  date: string;
};

const initialManagedPosts: ManagedPost[] = [
  { id: 34, title: 'Dark mode support', description: 'Add dark mode toggle and theme system for the entire app', status: 'in-progress', priority: 'high', product: 'web-app', board: 'feature-request', votes: 24, tags: ['Web Version', 'No prod'], comments: 18, date: 'Sep 18' },
  { id: 45, title: 'Export to CSV', description: 'Allow users to export their data in CSV format', status: 'backlog', priority: 'medium', product: 'api', board: 'feature-request', votes: 18, tags: ['Bug', 'Product'], comments: 15, date: 'Oct 3' },
  { id: 31, title: 'Mobile responsive', description: 'Optimize layouts and interactions for mobile devices', status: 'completed', priority: 'high', product: 'mobile-app', board: 'improvement', votes: 31, tags: ['Improve', 'No prod'], comments: 21, date: 'Aug 12' },
  { id: 12, title: 'API rate limiting', description: 'Implement rate limiting for public API endpoints', status: 'backlog', priority: 'low', product: 'api', board: 'bug-report', votes: 7, tags: ['Bug Report'], comments: 5, date: 'Nov 1' },
  { id: 28, title: 'User onboarding flow', description: 'Create a guided onboarding experience for new users', status: 'in-progress', priority: 'medium', product: 'web-app', board: 'improvement', votes: 15, tags: ['Feature Request'], comments: 12, date: 'Sep 25' },
];

export default function RoadmapFeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const dragContainerRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [nextPostId, setNextPostId] = useState(1);
  const [managedPosts, setManagedPosts] = useState<ManagedPost[]>(initialManagedPosts);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);

  useEffect(() => {
    if (openDropdown) {
      const handler = () => closeDropdown();
      document.addEventListener('click', handler);
      return () => document.removeEventListener('click', handler);
    }
  }, [openDropdown, closeDropdown]);

  const statusConfig = {
    'backlog': { label: 'Backlog', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-500/10' },
    'in-progress': { label: 'In Progress', color: 'bg-purple-500', textColor: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-500/10' },
    'completed': { label: 'Completed', color: 'bg-green-500', textColor: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-500/10' },
  };

  const priorityConfig = {
    'low': { label: 'Low', color: 'text-muted-foreground', bgColor: 'bg-muted' },
    'medium': { label: 'Medium', color: 'text-amber-600 dark:text-amber-400', bgColor: 'bg-amber-500/10' },
    'high': { label: 'High', color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-500/10' },
  };

  const productConfig = {
    'web-app': { label: 'Web App', color: 'text-cyan-600 dark:text-cyan-400', bgColor: 'bg-cyan-500/10' },
    'mobile-app': { label: 'Mobile App', color: 'text-pink-600 dark:text-pink-400', bgColor: 'bg-pink-500/10' },
    'api': { label: 'API', color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-500/10' },
  };

  const boardConfig = {
    'feature-request': { label: 'Feature Request', color: 'text-indigo-600 dark:text-indigo-400', bgColor: 'bg-indigo-500/10' },
    'bug-report': { label: 'Bug Report', color: 'text-rose-600 dark:text-rose-400', bgColor: 'bg-rose-500/10' },
    'improvement': { label: 'Improvement', color: 'text-teal-600 dark:text-teal-400', bgColor: 'bg-teal-500/10' },
  };

  const handleStatusChange = (postId: number, newStatus: ManagedPost['status']) => {
    setManagedPosts(prev => prev.map(p => p.id === postId ? { ...p, status: newStatus } : p));
  };

  const handlePriorityChange = (postId: number, newPriority: ManagedPost['priority']) => {
    setManagedPosts(prev => prev.map(p => p.id === postId ? { ...p, priority: newPriority } : p));
  };

  const handleProductChange = (postId: number, newProduct: ManagedPost['product']) => {
    setManagedPosts(prev => prev.map(p => p.id === postId ? { ...p, product: newProduct } : p));
  };

  const handleBoardChange = (postId: number, newBoard: ManagedPost['board']) => {
    setManagedPosts(prev => prev.map(p => p.id === postId ? { ...p, board: newBoard } : p));
  };

  const handleVote = (postId: number) => {
    setManagedPosts(prev => prev.map(p => p.id === postId ? { ...p, votes: p.votes + 1 } : p));
  };

  const tabs = [
    { id: 0, label: 'Drag & Drop', icon: Target },
    { id: 1, label: 'Create Posts', icon: Target },
    { id: 2, label: 'Post Management', icon: Target },
  ];

  const columns = [
    {
      id: 'backlog',
      title: 'Backlog',
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      borderColor: 'border-blue-500',
      headerBg: 'bg-blue-500/10',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
      borderColor: 'border-purple-500',
      headerBg: 'bg-purple-500/10',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'completed',
      title: 'Completed',
      color: 'bg-green-500',
      textColor: 'text-green-500',
      borderColor: 'border-green-500',
      headerBg: 'bg-green-500/10',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const handleCreatePost = (columnId: string) => {
    const imageIndex = (nextPostId % 3) + 1;
    const newPost: Post = {
      id: nextPostId,
      columnId,
      image: `/posts/post-${imageIndex}.svg`,
    };
    setPosts([...posts, newPost]);
    setNextPostId(nextPostId + 1);
  };

  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full overflow-hidden pl-6 pt-6">
              <div className="w-full flex justify-start items-center gap-2">
                <Layout className="text-primary size-5" />
                <h3 className="text-foreground text-lg font-semibold">Roadmap</h3>
              </div>
              <p className="text-muted-foreground max-w-xl">
                Keep track on your users requests by visualising them with the roadmap
              </p>
              <div className="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
                <div className="bg-background rounded-tl-(--radius) ring-foreground/5 relative mx-auto mt-4 overflow-hidden border border-transparent shadow ring-1">
                  <Image
                    src="/previews/Posts-full-1.png"
                    alt="Tecca roadmap view with feedback items organized by status"
                    width={2880}
                    height={1842}
                    className="object-top-left h-full object-cover"
                  />
                </div>
              </div>
            </Card>

            <Card className="col-span-full p-0 flex flex-col border-0 bg-transparent shadow-none mt-5">
              {/* Tab Navigation */}
              <div className="w-full mb-2">
                <div className="overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  <div className="flex gap-3 justify-center min-w-max px-2 pb-2">
                    {tabs.map((tab) => {
                      const IconComponent = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`relative cursor-pointer px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base font-medium border-2 whitespace-nowrap ${
                            activeTab === tab.id
                              ? 'text-primary border-primary shadow-lg shadow-primary/20'
                              : 'text-muted-foreground border-border hover:text-foreground hover:border-primary/50 hover:bg-muted/50'
                          }`}
                        >
                          <IconComponent className="size-4 flex-shrink-0" />
                          <span className="relative z-10">{tab.label}</span>
                          {activeTab === tab.id && (
                            <motion.div
                              layoutId="activeTabBackground"
                              className="absolute inset-0 bg-primary/10 rounded-xl"
                              transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 0 && (
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div className="w-full flex-col gap-2 text-center">
                        <h3 className="text-foreground text-xl font-semibold">Drag & Drop</h3>
                        <p className="text-muted-foreground">
                          Move posts across the board with no effort. Try dragging the images below!
                        </p>
                      </div>

                      <div
                        ref={dragContainerRef}
                        className="w-full bg-muted/30 rounded-lg p-4 md:p-6 relative overflow-hidden min-h-[340px] md:min-h-[400px] lg:min-h-[440px] border border-border"
                      >
                        <motion.div
                          drag
                          dragConstraints={dragContainerRef}
                          dragElastic={0.05}
                          dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
                          className="absolute left-2 md:left-8 top-4 md:top-12 cursor-grab active:cursor-grabbing z-10"
                          whileDrag={{ scale: 1.05, rotate: 3, zIndex: 50 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Image
                            src="/posts/post-1.svg"
                            alt="Draggable post 1"
                            width={456}
                            height={189}
                            className="drop-shadow-2xl pointer-events-none select-none w-56 h-auto md:w-72 lg:w-96"
                            draggable={false}
                          />
                        </motion.div>

                        <motion.div
                          drag
                          dragConstraints={dragContainerRef}
                          dragElastic={0.05}
                          dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
                          className="absolute left-1/4 md:left-1/3 top-20 md:top-40 lg:top-52 cursor-grab active:cursor-grabbing z-10"
                          whileDrag={{ scale: 1.05, rotate: -3, zIndex: 50 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Image
                            src="/posts/post-2.svg"
                            alt="Draggable post 2"
                            width={456}
                            height={189}
                            className="drop-shadow-2xl pointer-events-none select-none w-56 h-auto md:w-72 lg:w-96"
                            draggable={false}
                          />
                        </motion.div>

                        <motion.div
                          drag
                          dragConstraints={dragContainerRef}
                          dragElastic={0.05}
                          dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
                          className="absolute right-2 md:right-12 top-12 md:top-24 lg:top-32 cursor-grab active:cursor-grabbing z-10"
                          whileDrag={{ scale: 1.05, rotate: 2, zIndex: 50 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Image
                            src="/posts/post-3.svg"
                            alt="Draggable post 3"
                            width={456}
                            height={189}
                            className="drop-shadow-2xl pointer-events-none select-none w-56 h-auto md:w-72 lg:w-96"
                            draggable={false}
                          />
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div className="w-full flex-col gap-2 text-center">
                        <h3 className="text-foreground text-xl font-semibold">Create Posts</h3>
                        <p className="text-muted-foreground">
                          Click plus buttons to create posts in different columns!
                        </p>
                      </div>

                      <div className="w-full overflow-x-auto lg:overflow-x-visible">
                        <div className="flex gap-3 md:gap-4 pb-2 lg:justify-center">
                          {columns.map((column) => {
                            const columnPosts = posts.filter(post => post.columnId === column.id);

                            return (
                              <div
                                key={column.id}
                                data-column={column.id}
                                className="w-[240px] md:w-[280px] lg:w-[300px] flex-shrink-0 bg-muted/30 rounded-lg border border-border relative flex flex-col overflow-hidden"
                              >
                                {/* Column Header */}
                                <div className={`flex items-center justify-between px-3 py-1.5 border-b border-border ${column.headerBg}`}>
                                  <div className="flex items-center gap-1.5">
                                    <div className={`${column.textColor}`}>
                                      {column.icon}
                                    </div>
                                    <h4 className="font-semibold text-xs md:text-sm text-foreground">
                                      {column.title}
                                    </h4>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted/80 text-muted-foreground">
                                      {columnPosts.length}
                                    </span>
                                  </div>

                                  <button
                                    onClick={() => handleCreatePost(column.id)}
                                    className="h-8 px-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center"
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M12 4v16m8-8H4"
                                      />
                                    </svg>
                                  </button>
                                </div>

                                {/* Column Content - Drop Zone with Fancy Scroll */}
                                <div className="relative flex-1 overflow-hidden">
                                  {/* Top Shadow Gradient */}
                                  {columnPosts.length > 0 && (
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none z-10"></div>
                                  )}

                                  {/* Scrollable Content Area */}
                                  <div className="h-full overflow-y-auto p-3 md:p-4 space-y-3 min-h-[340px] md:min-h-[400px] max-h-[340px] md:max-h-[400px] scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/50 scrollbar-thumb-rounded-full">
                                    <AnimatePresence>
                                      {columnPosts.map((post, index) => (
                                        <motion.div
                                          key={post.id}
                                          layout
                                          initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                          animate={{ opacity: 1, scale: 1, y: 0 }}
                                          exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                          transition={{ type: 'spring', bounce: 0.3, duration: 0.5, delay: index * 0.05 }}
                                        >
                                          <Image
                                            src={post.image}
                                            alt={`Post ${post.id}`}
                                            width={456}
                                            height={189}
                                            className="drop-shadow-xl select-none w-full h-auto rounded-md"
                                            draggable={false}
                                          />
                                        </motion.div>
                                      ))}
                                    </AnimatePresence>

                                    {columnPosts.length === 0 && (
                                      <div className="flex items-center justify-center h-full min-h-[200px] text-muted-foreground text-sm">
                                        <div className="text-center">
                                          <svg
                                            className="w-12 h-12 mx-auto mb-2 opacity-30"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={1.5}
                                              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                          </svg>
                                          <p>No posts yet</p>
                                          <p className="text-xs mt-1">Click + to create</p>
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                  {/* Bottom Shadow Gradient */}
                                  {columnPosts.length > 0 && (
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none z-10"></div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div className="w-full flex-col gap-2 text-center">
                        <h3 className="text-foreground text-xl font-semibold">Post Management</h3>
                        <p className="text-muted-foreground">
                          Manage posts straight from the roadmap view. Click on a specific post on the list or roadmap to manage it directly from the chosen view
                        </p>
                      </div>

                      {/* Roadmap Columns */}
                      <div className="w-full overflow-x-auto lg:overflow-x-visible">
                        <div className="flex gap-3 md:gap-4 pb-2 lg:justify-center">
                          {(Object.keys(statusConfig) as ManagedPost['status'][]).map((statusKey) => {
                            const config = statusConfig[statusKey];
                            const columnPosts = managedPosts.filter(p => p.status === statusKey);

                            return (
                              <div key={statusKey} className="w-[260px] md:w-[280px] lg:w-[300px] flex-shrink-0 bg-muted/30 rounded-lg border border-border flex flex-col overflow-visible">
                                {/* Column Header */}
                                <div className={`flex items-center justify-between px-3 py-1.5 border-b border-border ${config.bgColor}`}>
                                  <div className="flex items-center gap-1.5">
                                    <div className={columns.find(c => c.id === statusKey)?.textColor}>
                                      {columns.find(c => c.id === statusKey)?.icon}
                                    </div>
                                    <h4 className="font-semibold text-xs md:text-sm text-foreground">{config.label}</h4>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted/80 text-muted-foreground">{columnPosts.length}</span>
                                  </div>
                                </div>

                                {/* Column Cards */}
                                <div className="p-2 md:p-3 space-y-2.5 min-h-[200px]">
                                  <AnimatePresence>
                                    {columnPosts.map((post) => {
                                      const priorityDropdownKey = `priority-${post.id}`;
                                      const productDropdownKey = `product-${post.id}`;
                                      const boardDropdownKey = `board-${post.id}`;

                                      return (
                                        <motion.div
                                          key={post.id}
                                          layout
                                          initial={{ opacity: 0, scale: 0.95 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          exit={{ opacity: 0, scale: 0.95 }}
                                          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                          className="bg-background dark:bg-[#15151E] rounded-[5px] border border-border dark:border-[#24252B] p-2.5 flex flex-col gap-2 relative overflow-visible"
                                        >
                                          {/* Top Row: Post number & Status pill */}
                                          <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 text-muted-foreground dark:text-[#9B9AA1]">
                                              <ChevronUp className="w-5 h-5" />
                                              <span className="text-xs font-semibold block">{post.id}</span>
                                            </div>
                                            {/* Status Dropdown - moves card between columns */}
                                            <div className="relative">
                                              <button
                                                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === `status-${post.id}` ? null : `status-${post.id}`); }}
                                                className={`text-[9px] px-2 py-0.5 rounded-full font-medium cursor-pointer flex items-center gap-0.5 transition-all ${config.bgColor} ${config.textColor}`}
                                              >
                                                {config.label}
                                                <svg className={`w-1.5 h-1.5 transition-transform ${openDropdown === `status-${post.id}` ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                </svg>
                                              </button>
                                              <AnimatePresence>
                                                {openDropdown === `status-${post.id}` && (
                                                  <motion.div
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute z-30 top-full mt-1 right-0 w-32 bg-background dark:bg-[#1c1c28] border border-border dark:border-[#24252B] rounded-md shadow-lg overflow-hidden"
                                                  >
                                                    {(Object.keys(statusConfig) as ManagedPost['status'][]).map((s) => (
                                                      <button
                                                        key={s}
                                                        onClick={(e) => { e.stopPropagation(); handleStatusChange(post.id, s); setOpenDropdown(null); }}
                                                        className={`w-full text-left text-[10px] px-2.5 py-1.5 transition-colors cursor-pointer flex items-center gap-2 ${
                                                          post.status === s ? `${statusConfig[s].bgColor} ${statusConfig[s].textColor} font-medium` : 'text-foreground hover:bg-muted dark:hover:bg-[#24252B]'
                                                        }`}
                                                      >
                                                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${statusConfig[s].color}`} />
                                                        {statusConfig[s].label}
                                                      </button>
                                                    ))}
                                                  </motion.div>
                                                )}
                                              </AnimatePresence>
                                            </div>
                                          </div>

                                          {/* Title & Description Bars */}
                                          <div className="h-3 w-3/5 rounded bg-muted/60 dark:bg-[#797979]/25" />
                                          <div className="h-3 w-4/5 rounded bg-muted/30 dark:bg-[#797979]/10" />

                                          {/* Tags Row: Product, Board, Priority, Vote */}
                                          <div className="flex items-center gap-1 flex-wrap">
                                            {/* Product Dropdown */}
                                            <div className="relative">
                                              <button
                                                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === productDropdownKey ? null : productDropdownKey); }}
                                                className={`text-[9px] px-2 py-0.5 rounded-full font-medium transition-all cursor-pointer flex items-center gap-0.5 border border-border dark:border-[#37363D] ${productConfig[post.product].color}`}
                                              >
                                                {productConfig[post.product].label}
                                                <svg className={`w-1.5 h-1.5 transition-transform ${openDropdown === productDropdownKey ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                </svg>
                                              </button>
                                              <AnimatePresence>
                                                {openDropdown === productDropdownKey && (
                                                  <motion.div
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute z-30 top-full mt-1 left-0 w-28 bg-background dark:bg-[#1c1c28] border border-border dark:border-[#24252B] rounded-md shadow-lg overflow-hidden"
                                                  >
                                                    {(Object.keys(productConfig) as ManagedPost['product'][]).map((product) => (
                                                      <button
                                                        key={product}
                                                        onClick={(e) => { e.stopPropagation(); handleProductChange(post.id, product); setOpenDropdown(null); }}
                                                        className={`w-full text-left text-[10px] px-2.5 py-1.5 transition-colors cursor-pointer ${
                                                          post.product === product ? `${productConfig[product].bgColor} ${productConfig[product].color} font-medium` : 'text-foreground hover:bg-muted dark:hover:bg-[#24252B]'
                                                        }`}
                                                      >
                                                        {productConfig[product].label}
                                                      </button>
                                                    ))}
                                                  </motion.div>
                                                )}
                                              </AnimatePresence>
                                            </div>

                                            {/* Board Dropdown */}
                                            <div className="relative">
                                              <button
                                                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === boardDropdownKey ? null : boardDropdownKey); }}
                                                className={`text-[9px] px-2 py-0.5 rounded-full font-medium transition-all cursor-pointer flex items-center gap-0.5 border border-border dark:border-[#37363D] ${boardConfig[post.board].color}`}
                                              >
                                                {boardConfig[post.board].label}
                                                <svg className={`w-1.5 h-1.5 transition-transform ${openDropdown === boardDropdownKey ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                </svg>
                                              </button>
                                              <AnimatePresence>
                                                {openDropdown === boardDropdownKey && (
                                                  <motion.div
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute z-30 top-full mt-1 left-0 w-32 bg-background dark:bg-[#1c1c28] border border-border dark:border-[#24252B] rounded-md shadow-lg overflow-hidden"
                                                  >
                                                    {(Object.keys(boardConfig) as ManagedPost['board'][]).map((board) => (
                                                      <button
                                                        key={board}
                                                        onClick={(e) => { e.stopPropagation(); handleBoardChange(post.id, board); setOpenDropdown(null); }}
                                                        className={`w-full text-left text-[10px] px-2.5 py-1.5 transition-colors cursor-pointer ${
                                                          post.board === board ? `${boardConfig[board].bgColor} ${boardConfig[board].color} font-medium` : 'text-foreground hover:bg-muted dark:hover:bg-[#24252B]'
                                                        }`}
                                                      >
                                                        {boardConfig[board].label}
                                                      </button>
                                                    ))}
                                                  </motion.div>
                                                )}
                                              </AnimatePresence>
                                            </div>

                                            {/* Priority Dropdown */}
                                            <div className="relative">
                                              <button
                                                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === priorityDropdownKey ? null : priorityDropdownKey); }}
                                                className={`text-[9px] px-2 py-0.5 rounded-full font-medium transition-all cursor-pointer flex items-center gap-0.5 border border-border dark:border-[#37363D] ${priorityConfig[post.priority].color}`}
                                              >
                                                {priorityConfig[post.priority].label}
                                                <svg className={`w-1.5 h-1.5 transition-transform ${openDropdown === priorityDropdownKey ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                </svg>
                                              </button>
                                              <AnimatePresence>
                                                {openDropdown === priorityDropdownKey && (
                                                  <motion.div
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute z-30 top-full mt-1 left-0 w-24 bg-background dark:bg-[#1c1c28] border border-border dark:border-[#24252B] rounded-md shadow-lg overflow-hidden"
                                                  >
                                                    {(Object.keys(priorityConfig) as ManagedPost['priority'][]).map((priority) => (
                                                      <button
                                                        key={priority}
                                                        onClick={(e) => { e.stopPropagation(); handlePriorityChange(post.id, priority); setOpenDropdown(null); }}
                                                        className={`w-full text-left text-[10px] px-2.5 py-1.5 transition-colors cursor-pointer ${
                                                          post.priority === priority ? `${priorityConfig[priority].bgColor} ${priorityConfig[priority].color} font-medium` : 'text-foreground hover:bg-muted dark:hover:bg-[#24252B]'
                                                        }`}
                                                      >
                                                        {priorityConfig[priority].label}
                                                      </button>
                                                    ))}
                                                  </motion.div>
                                                )}
                                              </AnimatePresence>
                                            </div>

                                            {/* Vote Badge */}
                                            <motion.button
                                              onClick={() => handleVote(post.id)}
                                              className="text-[9px] text-white px-1.5 py-0.5 rounded-full bg-[#7E71B7] flex items-center gap-0.5 cursor-pointer font-medium"
                                              whileTap={{ scale: 0.9 }}
                                            >
                                              <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 4v16m8-8H4" />
                                              </svg>
                                              <motion.span key={post.votes} initial={{ scale: 1.3 }} animate={{ scale: 1 }}>
                                                {post.votes}
                                              </motion.span>
                                            </motion.button>
                                          </div>

                                          {/* Bottom Row: Date, Comments, Users */}
                                          <div className="flex items-center justify-between text-muted-foreground dark:text-[#B0B0B0] text-[10px]">
                                            <span>{post.date}</span>
                                            <div className="flex items-center gap-2">
                                              <div className="flex items-center gap-0.5">
                                                <MessageCircle className="w-3 h-3" />
                                                <span>{post.comments}</span>
                                              </div>
                                              <CircleUser className="w-3 h-3" />
                                            </div>
                                          </div>
                                        </motion.div>
                                      );
                                    })}
                                  </AnimatePresence>

                                  {columnPosts.length === 0 && (
                                    <div className="flex items-center justify-center h-full min-h-[120px] text-muted-foreground text-xs">
                                      <p className="opacity-40">No posts</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
