(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $none_=>_none (func))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i64_i32_=>_i32 (func (param i64 i32) (result i32)))
 (type $i32_=>_i64 (func (param i32) (result i64)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_f32_=>_i32 (func (param i32 i32 i32 f32) (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_f64_=>_i32 (func (param i32 f64) (result i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/as-proto/Protobuf/WRITER (mut i32) (i32.const 0))
 (global $~lib/as-proto/Protobuf/READER (mut i32) (i32.const 0))
 (global $assembly/static_aspr/testDecoded (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $assembly/static_aspr/testEncoded (mut i32) (i32.const 0))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 20556))
 (memory $0 1)
 (data (i32.const 1036) "<")
 (data (i32.const 1048) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1100) "<")
 (data (i32.const 1112) "\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data (i32.const 1228) "<")
 (data (i32.const 1240) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1292) ",")
 (data (i32.const 1304) "\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data (i32.const 1372) "<")
 (data (i32.const 1384) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1436) "\1c")
 (data (i32.const 1468) "\1c")
 (data (i32.const 1500) "\1c")
 (data (i32.const 1532) ",")
 (data (i32.const 1544) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1580) "<")
 (data (i32.const 1592) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 1644) "L")
 (data (i32.const 1656) "\01\00\00\006\00\00\00L\00o\00r\00e\00m\00 \00i\00p\00s\00u\00m\00 \00d\00o\00l\00o\00r\00 \00s\00i\00t\00 \00a\00m\00e\00t\00.")
 (data (i32.const 1724) "\1c")
 (data (i32.const 1740) "\07\00\00\00\01\00\00\01\00\00\01")
 (data (i32.const 1756) ",")
 (data (i32.const 1768) "\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1804) "\1c")
 (data (i32.const 1816) "\0f\00\00\00\08\00\00\00\01")
 (data (i32.const 1836) "\1c")
 (data (i32.const 1848) "\01")
 (data (i32.const 1868) "\1c")
 (data (i32.const 1900) "\1c")
 (data (i32.const 1912) "\10\00\00\00\08\00\00\00\02")
 (data (i32.const 1932) "<")
 (data (i32.const 1944) "\01\00\00\00$\00\00\00U\00n\00p\00a\00i\00r\00e\00d\00 \00s\00u\00r\00r\00o\00g\00a\00t\00e")
 (data (i32.const 1996) ",")
 (data (i32.const 2008) "\01\00\00\00\1c\00\00\00~\00l\00i\00b\00/\00s\00t\00r\00i\00n\00g\00.\00t\00s")
 (data (i32.const 2044) ",")
 (data (i32.const 2056) "\01\00\00\00\1c\00\00\00A\00r\00r\00a\00y\00 \00i\00s\00 \00e\00m\00p\00t\00y")
 (data (i32.const 2092) "<")
 (data (i32.const 2104) "\01\00\00\00$\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00w\00i\00r\00e\00 \00t\00y\00p\00e\00 ")
 (data (i32.const 2156) "|")
 (data (i32.const 2168) "\01\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006")
 (data (i32.const 2284) "<")
 (data (i32.const 2296) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s")
 (data (i32.const 2348) "\1c")
 (data (i32.const 2360) "\01\00\00\00\02\00\00\000")
 (data (i32.const 2380) "0\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009")
 (data (i32.const 2780) "\1c\04")
 (data (i32.const 2792) "\01\00\00\00\00\04\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\00a\000\00b\000\00c\000\00d\000\00e\000\00f\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\00a\001\00b\001\00c\001\00d\001\00e\001\00f\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\002\00a\002\00b\002\00c\002\00d\002\00e\002\00f\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\003\00a\003\00b\003\00c\003\00d\003\00e\003\00f\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\004\00a\004\00b\004\00c\004\00d\004\00e\004\00f\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\005\00a\005\00b\005\00c\005\00d\005\00e\005\00f\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\006\00a\006\00b\006\00c\006\00d\006\00e\006\00f\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\007\00a\007\00b\007\00c\007\00d\007\00e\007\00f\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\008\00a\008\00b\008\00c\008\00d\008\00e\008\00f\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\009\00a\009\00b\009\00c\009\00d\009\00e\009\00f\00a\000\00a\001\00a\002\00a\003\00a\004\00a\005\00a\006\00a\007\00a\008\00a\009\00a\00a\00a\00b\00a\00c\00a\00d\00a\00e\00a\00f\00b\000\00b\001\00b\002\00b\003\00b\004\00b\005\00b\006\00b\007\00b\008\00b\009\00b\00a\00b\00b\00b\00c\00b\00d\00b\00e\00b\00f\00c\000\00c\001\00c\002\00c\003\00c\004\00c\005\00c\006\00c\007\00c\008\00c\009\00c\00a\00c\00b\00c\00c\00c\00d\00c\00e\00c\00f\00d\000\00d\001\00d\002\00d\003\00d\004\00d\005\00d\006\00d\007\00d\008\00d\009\00d\00a\00d\00b\00d\00c\00d\00d\00d\00e\00d\00f\00e\000\00e\001\00e\002\00e\003\00e\004\00e\005\00e\006\00e\007\00e\008\00e\009\00e\00a\00e\00b\00e\00c\00e\00d\00e\00e\00e\00f\00f\000\00f\001\00f\002\00f\003\00f\004\00f\005\00f\006\00f\007\00f\008\00f\009\00f\00a\00f\00b\00f\00c\00f\00d\00f\00e\00f\00f")
 (data (i32.const 3836) "\\")
 (data (i32.const 3848) "\01\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z")
 (data (i32.const 3932) "\\")
 (data (i32.const 3944) "\01\00\00\00J\00\00\00~\00l\00i\00b\00/\00a\00s\00-\00p\00r\00o\00t\00o\00/\00i\00n\00t\00e\00r\00n\00a\00l\00/\00F\00i\00x\00e\00d\00R\00e\00a\00d\00e\00r\00.\00t\00s")
 (data (i32.const 4032) "\11\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 4064) "\04\00\00\00 ")
 (data (i32.const 4080) "\04\00\00\00\02\01\00\00\00\00\00\00\02\t\00\00\00\00\00\00A\00\00\00\02\00\00\00\00\00\00\00\n\00\00\00 ")
 (data (i32.const 4148) "B")
 (table $0 3 funcref)
 (elem $0 (i32.const 1) $assembly/generated/bench/Test.encode $assembly/generated/bench/Test.decode)
 (export "encode" (func $assembly/static_aspr/encode))
 (export "decode" (func $assembly/static_aspr/decode))
 (export "encodeDecode" (func $assembly/static_aspr/encodeDecode))
 (export "memory" (memory $0))
 (start $~start)
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  global.get $assembly/static_aspr/testDecoded
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/static_aspr/testEncoded
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  i32.const 1248
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1552
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 2064
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1056
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1952
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 2800
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 3856
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  global.get $~lib/as-proto/Protobuf/WRITER
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $~lib/as-proto/Protobuf/READER
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load offset=4
    drop
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/rt/itcms/iter
  local.get $0
  i32.eq
  if
   local.get $0
   i32.load offset=8
   global.set $~lib/rt/itcms/iter
  end
  block $__inlined_func$~lib/rt/itcms/Object#unlink
   local.get $0
   i32.load offset=4
   i32.const -4
   i32.and
   local.tee $1
   i32.eqz
   if
    local.get $0
    i32.load offset=8
    drop
    br $__inlined_func$~lib/rt/itcms/Object#unlink
   end
   local.get $1
   local.get $0
   i32.load offset=8
   local.tee $2
   i32.store offset=8
   local.get $2
   local.get $2
   i32.load offset=4
   i32.const 3
   i32.and
   local.get $1
   i32.or
   i32.store offset=4
  end
  global.get $~lib/rt/itcms/toSpace
  local.set $2
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   i32.const 4032
   i32.load
   local.get $1
   i32.lt_u
   if
    i32.const 1248
    i32.const 1312
    i32.const 22
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 3
   i32.shl
   i32.const 4036
   i32.add
   i32.load
   i32.const 32
   i32.and
  end
  local.set $3
  local.get $2
  i32.load offset=8
  local.set $1
  local.get $0
  local.get $2
  global.get $~lib/rt/itcms/white
  i32.eqz
  i32.const 2
  local.get $3
  select
  i32.or
  i32.store offset=4
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $1
  i32.load offset=4
  i32.const 3
  i32.and
  local.get $0
  i32.or
  i32.store offset=4
  local.get $2
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  i32.const -4
  i32.and
  local.tee $3
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   local.get $3
   i32.const 1073741820
   local.get $3
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 7
   i32.sub
   local.set $2
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.set $3
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $3
  local.get $2
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=96
  local.get $1
  i32.eq
  if
   local.get $3
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $2
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    local.tee $1
    i32.load offset=4
    i32.const -2
    local.get $3
    i32.rotl
    i32.and
    local.set $3
    local.get $1
    local.get $3
    i32.store offset=4
    local.get $3
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $2
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  i32.load
  local.tee $2
  local.set $3
  local.get $1
  i32.const 4
  i32.add
  local.get $2
  i32.const -4
  i32.and
  i32.add
  local.tee $4
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load
   local.set $2
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $1
   i32.load
   local.set $6
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $3
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const -4
  i32.and
  local.tee $2
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $2
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   local.get $2
   i32.const 1073741820
   local.get $2
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 7
   i32.sub
   local.set $5
   local.get $2
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $2
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=96
  local.set $3
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $3
  i32.store offset=8
  local.get $3
  if
   local.get $3
   local.get $1
   i32.store offset=4
  end
  local.get $2
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $5
  i32.shl
  i32.or
  i32.store
  local.get $5
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $2
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  i32.const 0
  local.get $2
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.tee $1
  i32.const 16
  i32.sub
  i32.eq
  select
  if
   local.get $2
   i32.load
   local.set $3
   local.get $1
   i32.const 16
   i32.sub
   local.set $1
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $3
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $1
  i32.const 0
  i32.le_s
  if (result i32)
   i32.const 1
   local.get $1
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 20560
  i32.const 0
  i32.store
  i32.const 22128
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $0
   i32.const 23
   i32.lt_u
   if
    local.get $0
    i32.const 2
    i32.shl
    i32.const 20560
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $1
    loop $for-loop|1
     local.get $1
     i32.const 16
     i32.lt_u
     if
      local.get $1
      local.get $0
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 20560
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $1
      i32.const 1
      i32.add
      local.set $1
      br $for-loop|1
     end
    end
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  i32.const 20560
  i32.const 22132
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 20560
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      br_table $case0|0 $case1|0 $case2|0 $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $2
    global.get $~lib/rt/itcms/iter
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    loop $while-continue|1
     global.get $~lib/rt/itcms/toSpace
     local.get $0
     i32.ne
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $0
      i32.load offset=4
      i32.const 3
      i32.and
      local.get $2
      i32.ne
      if
       local.get $0
       local.get $2
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       i32.or
       i32.store offset=4
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       return
      end
      local.get $0
      i32.load offset=4
      i32.const -4
      i32.and
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/iter
    i32.load offset=4
    i32.const -4
    i32.and
    i32.eq
    if
     global.get $~lib/memory/__stack_pointer
     local.set $0
     loop $while-continue|0
      local.get $0
      i32.const 20556
      i32.lt_u
      if
       local.get $0
       i32.load
       local.tee $1
       if
        local.get $1
        call $byn-split-outlined-A$~lib/rt/itcms/__visit
       end
       local.get $0
       i32.const 4
       i32.add
       local.set $0
       br $while-continue|0
      end
     end
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|2
      global.get $~lib/rt/itcms/toSpace
      local.get $0
      i32.ne
      if
       local.get $0
       i32.load offset=4
       i32.const 3
       i32.and
       local.get $2
       i32.ne
       if
        local.get $0
        local.get $2
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        i32.or
        i32.store offset=4
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
       end
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $0
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $0
     global.set $~lib/rt/itcms/toSpace
     local.get $2
     global.set $~lib/rt/itcms/white
     local.get $0
     i32.load offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    return
   end
   global.get $~lib/rt/itcms/iter
   local.tee $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    global.set $~lib/rt/itcms/iter
    local.get $0
    i32.const 20556
    i32.lt_u
    if
     local.get $0
     i32.const 0
     i32.store offset=4
     local.get $0
     i32.const 0
     i32.store offset=8
    else
     global.get $~lib/rt/itcms/total
     local.get $0
     i32.load
     i32.const -4
     i32.and
     i32.const 4
     i32.add
     i32.sub
     global.set $~lib/rt/itcms/total
     local.get $0
     i32.const 4
     i32.add
     local.tee $0
     i32.const 20556
     i32.ge_u
     if
      global.get $~lib/rt/tlsf/ROOT
      i32.eqz
      if
       call $~lib/rt/tlsf/initialize
      end
      local.get $0
      i32.const 4
      i32.sub
      local.set $1
      local.get $0
      i32.const 15
      i32.and
      i32.const 1
      local.get $0
      select
      if (result i32)
       i32.const 1
      else
       local.get $1
       i32.load
       i32.const 1
       i32.and
      end
      drop
      local.get $1
      local.get $1
      i32.load
      i32.const 1
      i32.or
      i32.store
      global.get $~lib/rt/tlsf/ROOT
      local.get $1
      call $~lib/rt/tlsf/insertBlock
     end
    end
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   local.tee $0
   local.get $0
   i32.store offset=4
   local.get $0
   local.get $0
   i32.store offset=8
   i32.const 0
   global.set $~lib/rt/itcms/state
  end
  i32.const 0
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $1
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   local.get $1
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870910
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.tee $3
   i32.const 7
   i32.sub
   local.set $2
   local.get $1
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.set $1
  local.get $2
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $0
    local.get $1
    i32.ctz
    local.tee $0
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    i32.ctz
    local.get $0
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1056
   i32.const 1392
   i32.const 458
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 12
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $1
  i32.const 12
  i32.le_u
  select
  local.tee $3
  call $~lib/rt/tlsf/searchBlock
  local.tee $1
  i32.eqz
  if
   memory.size
   local.tee $1
   i32.const 4
   local.get $0
   i32.load offset=1568
   local.get $1
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   i32.ne
   i32.shl
   i32.const 1
   i32.const 27
   local.get $3
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   local.get $3
   i32.add
   local.get $3
   local.get $3
   i32.const 536870910
   i32.lt_u
   select
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $2
   local.get $1
   local.get $2
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $2
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $0
   local.get $1
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $0
   local.get $3
   call $~lib/rt/tlsf/searchBlock
   local.set $1
  end
  local.get $1
  i32.load
  drop
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/removeBlock
  local.get $1
  i32.load
  local.tee $4
  i32.const -4
  i32.and
  local.get $3
  i32.sub
  local.tee $2
  i32.const 16
  i32.ge_u
  if
   local.get $1
   local.get $4
   i32.const 2
   i32.and
   local.get $3
   i32.or
   i32.store
   local.get $3
   local.get $1
   i32.const 4
   i32.add
   i32.add
   local.tee $3
   local.get $2
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $3
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $4
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $0
   local.get $0
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $1
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 260
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $2
    loop $do-loop|0
     local.get $2
     call $~lib/rt/itcms/step
     i32.sub
     local.set $2
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $2
     i32.const 0
     i32.gt_s
     br_if $do-loop|0
    end
    global.get $~lib/rt/itcms/total
    local.tee $2
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    local.get $2
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  i32.const 16
  i32.add
  call $~lib/rt/tlsf/allocateBlock
  local.tee $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  global.get $~lib/rt/itcms/fromSpace
  local.tee $1
  i32.load offset=8
  local.set $3
  local.get $2
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.or
  i32.store offset=4
  local.get $2
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $3
  i32.load offset=4
  i32.const 3
  i32.and
  local.get $2
  i32.or
  i32.store offset=4
  local.get $1
  local.get $2
  i32.store offset=8
  global.get $~lib/rt/itcms/total
  local.get $2
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.tee $2
  local.set $1
  block $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   local.tee $3
   i32.const 1
   i32.sub
   i32.const 0
   i32.store8
   local.get $0
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 0
   i32.store8 offset=2
   local.get $3
   i32.const 2
   i32.sub
   i32.const 0
   i32.store8
   local.get $3
   i32.const 3
   i32.sub
   i32.const 0
   i32.store8
   local.get $0
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.const 0
   i32.store8 offset=3
   local.get $3
   i32.const 4
   i32.sub
   i32.const 0
   i32.store8
   local.get $0
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.const 0
   local.get $1
   i32.sub
   i32.const 3
   i32.and
   local.tee $3
   i32.add
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   local.get $0
   local.get $3
   i32.sub
   i32.const -4
   i32.and
   local.tee $0
   i32.add
   local.tee $3
   i32.const 4
   i32.sub
   i32.const 0
   i32.store
   local.get $0
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $3
   i32.const 12
   i32.sub
   i32.const 0
   i32.store
   local.get $3
   i32.const 8
   i32.sub
   i32.const 0
   i32.store
   local.get $0
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $1
   i32.const 0
   i32.store offset=24
   local.get $3
   i32.const 28
   i32.sub
   i32.const 0
   i32.store
   local.get $3
   i32.const 24
   i32.sub
   i32.const 0
   i32.store
   local.get $3
   i32.const 20
   i32.sub
   i32.const 0
   i32.store
   local.get $3
   i32.const 16
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   local.get $1
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $3
   i32.add
   local.set $1
   local.get $0
   local.get $3
   i32.sub
   local.set $0
   loop $while-continue|0
    local.get $0
    i32.const 32
    i32.ge_u
    if
     local.get $1
     i64.const 0
     i64.store
     local.get $1
     i64.const 0
     i64.store offset=8
     local.get $1
     i64.const 0
     i64.store offset=16
     local.get $1
     i64.const 0
     i64.store offset=24
     local.get $0
     i32.const 32
     i32.sub
     local.set $0
     local.get $1
     i32.const 32
     i32.add
     local.set $1
     br $while-continue|0
    end
   end
  end
  local.get $2
 )
 (func $~lib/util/memory/memcpy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  loop $while-continue|0
   local.get $1
   i32.const 3
   i32.and
   i32.const 0
   local.get $2
   select
   if
    local.get $0
    local.tee $3
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    local.tee $4
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    local.get $4
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.const 3
  i32.and
  i32.eqz
  if
   loop $while-continue|1
    local.get $2
    i32.const 16
    i32.ge_u
    if
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     local.get $1
     i32.load offset=4
     i32.store offset=4
     local.get $0
     local.get $1
     i32.load offset=8
     i32.store offset=8
     local.get $0
     local.get $1
     i32.load offset=12
     i32.store offset=12
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $while-continue|1
    end
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    local.get $1
    i32.load offset=4
    i32.store offset=4
    local.get $1
    i32.const 8
    i32.add
    local.set $1
    local.get $0
    i32.const 8
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    local.get $0
    i32.const 4
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $1
    i32.const 2
    i32.add
    local.set $1
    local.get $0
    i32.const 2
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.get $1
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       i32.const 1
       i32.sub
       br_table $case0|2 $case1|2 $case2|2 $break|2
      end
      local.get $1
      i32.load
      local.set $5
      local.get $0
      local.get $1
      i32.load8_u
      i32.store8
      local.get $0
      local.get $1
      i32.load8_u offset=1
      i32.store8 offset=1
      local.get $0
      i32.const 2
      i32.add
      local.tee $3
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      i32.const 2
      i32.add
      local.tee $4
      i32.const 1
      i32.add
      local.set $1
      local.get $3
      local.get $4
      i32.load8_u
      i32.store8
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      loop $while-continue|3
       local.get $2
       i32.const 17
       i32.ge_u
       if
        local.get $0
        local.get $1
        i32.load offset=1
        local.tee $3
        i32.const 8
        i32.shl
        local.get $5
        i32.const 24
        i32.shr_u
        i32.or
        i32.store
        local.get $0
        local.get $1
        i32.load offset=5
        local.tee $4
        i32.const 8
        i32.shl
        local.get $3
        i32.const 24
        i32.shr_u
        i32.or
        i32.store offset=4
        local.get $0
        local.get $1
        i32.load offset=9
        local.tee $3
        i32.const 8
        i32.shl
        local.get $4
        i32.const 24
        i32.shr_u
        i32.or
        i32.store offset=8
        local.get $0
        local.get $1
        i32.load offset=13
        local.tee $5
        i32.const 8
        i32.shl
        local.get $3
        i32.const 24
        i32.shr_u
        i32.or
        i32.store offset=12
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $while-continue|3
       end
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $5
     local.get $0
     local.get $1
     i32.load8_u
     i32.store8
     local.get $0
     local.tee $3
     i32.const 2
     i32.add
     local.set $0
     local.get $1
     local.tee $4
     i32.const 2
     i32.add
     local.set $1
     local.get $3
     local.get $4
     i32.load8_u offset=1
     i32.store8 offset=1
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     loop $while-continue|4
      local.get $2
      i32.const 18
      i32.ge_u
      if
       local.get $0
       local.get $1
       i32.load offset=2
       local.tee $3
       i32.const 16
       i32.shl
       local.get $5
       i32.const 16
       i32.shr_u
       i32.or
       i32.store
       local.get $0
       local.get $1
       i32.load offset=6
       local.tee $4
       i32.const 16
       i32.shl
       local.get $3
       i32.const 16
       i32.shr_u
       i32.or
       i32.store offset=4
       local.get $0
       local.get $1
       i32.load offset=10
       local.tee $3
       i32.const 16
       i32.shl
       local.get $4
       i32.const 16
       i32.shr_u
       i32.or
       i32.store offset=8
       local.get $0
       local.get $1
       i32.load offset=14
       local.tee $5
       i32.const 16
       i32.shl
       local.get $3
       i32.const 16
       i32.shr_u
       i32.or
       i32.store offset=12
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $while-continue|4
      end
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $5
    local.get $0
    local.tee $3
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    local.tee $4
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    local.get $4
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    loop $while-continue|5
     local.get $2
     i32.const 19
     i32.ge_u
     if
      local.get $0
      local.get $1
      i32.load offset=3
      local.tee $3
      i32.const 24
      i32.shl
      local.get $5
      i32.const 8
      i32.shr_u
      i32.or
      i32.store
      local.get $0
      local.get $1
      i32.load offset=7
      local.tee $4
      i32.const 24
      i32.shl
      local.get $3
      i32.const 8
      i32.shr_u
      i32.or
      i32.store offset=4
      local.get $0
      local.get $1
      i32.load offset=11
      local.tee $3
      i32.const 24
      i32.shl
      local.get $4
      i32.const 8
      i32.shr_u
      i32.or
      i32.store offset=8
      local.get $0
      local.get $1
      i32.load offset=15
      local.tee $5
      i32.const 24
      i32.shl
      local.get $3
      i32.const 8
      i32.shr_u
      i32.or
      i32.store offset=12
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $while-continue|5
     end
    end
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $3
   i32.load8_u
   i32.store8
   local.get $3
   i32.const 2
   i32.add
   local.set $1
   local.get $0
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.set $0
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $3
   i32.load8_u
   i32.store8
   local.get $3
   i32.const 2
   i32.add
   local.set $1
   local.get $0
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.set $0
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.tee $0
   local.get $1
   i32.const 2
   i32.add
   local.tee $3
   i32.load8_u
   i32.store8
   local.get $3
   i32.const 2
   i32.add
   local.set $1
   local.get $0
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
   local.get $0
   i32.const 2
   i32.add
   local.set $0
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $3
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $4
   i32.const 2
   i32.add
   local.set $1
   local.get $3
   local.get $4
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $1
   local.get $0
   i32.sub
   local.get $4
   i32.sub
   i32.const 0
   local.get $4
   i32.const 1
   i32.shl
   i32.sub
   i32.le_u
   if
    local.get $0
    local.get $1
    local.get $4
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $start:~lib/as-proto/index
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 0
   i32.store
   memory.size
   i32.const 16
   i32.shl
   i32.const 20556
   i32.sub
   i32.const 1
   i32.shr_u
   global.set $~lib/rt/itcms/threshold
   i32.const 1172
   i32.const 1168
   i32.store
   i32.const 1176
   i32.const 1168
   i32.store
   i32.const 1168
   global.set $~lib/rt/itcms/pinSpace
   i32.const 1204
   i32.const 1200
   i32.store
   i32.const 1208
   i32.const 1200
   i32.store
   i32.const 1200
   global.set $~lib/rt/itcms/toSpace
   i32.const 1348
   i32.const 1344
   i32.store
   i32.const 1352
   i32.const 1344
   i32.store
   i32.const 1344
   global.set $~lib/rt/itcms/fromSpace
   local.get $0
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   i32.const 16
   i32.const 3
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
   local.get $0
   i32.const 0
   i32.store
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $0
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $~lib/as-proto/Writer/Writer#constructor
   local.tee $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 16
   i32.const 5
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   local.get $1
   call $~lib/as-proto/Writer/Writer#constructor
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.const 2
   i32.const 6
   i32.const 1456
   call $~lib/rt/__newArray
   local.tee $2
   i32.store offset=4
   local.get $2
   if
    local.get $1
    local.get $2
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   local.get $1
   i32.const 0
   i32.const 2
   i32.const 7
   i32.const 1488
   call $~lib/rt/__newArray
   local.tee $2
   i32.store offset=8
   local.get $2
   if
    local.get $1
    local.get $2
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   local.get $1
   i32.const 0
   i32.const 2
   i32.const 7
   i32.const 1520
   call $~lib/rt/__newArray
   local.tee $2
   i32.store offset=12
   local.get $2
   if
    local.get $1
    local.get $2
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   local.get $1
   i32.store
   local.get $1
   if
    local.get $0
    local.get $1
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   local.get $0
   local.get $0
   i32.load
   i32.load
   call $~lib/typedarray/Uint8Array#constructor
   local.tee $1
   i32.store offset=8
   local.get $1
   if
    local.get $0
    local.get $1
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   local.get $0
   local.get $0
   i32.load offset=8
   i32.load offset=4
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   global.set $~lib/as-proto/Protobuf/WRITER
   i32.const 0
   call $~lib/typedarray/Uint8Array#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   i32.const 12
   i32.const 9
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
   local.get $0
   i32.const 0
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.store
   local.get $0
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.const 10
    call $~lib/rt/itcms/__new
    local.tee $0
    i32.store
   end
   local.get $0
   i32.const 0
   i32.store
   local.get $0
   i32.const 0
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $2
   local.get $0
   i32.store
   local.get $0
   local.get $1
   i32.load offset=4
   i32.store
   local.get $0
   local.get $1
   i32.load offset=4
   local.get $1
   i32.load offset=8
   i32.add
   i32.store offset=4
   local.get $0
   local.get $1
   i32.store offset=8
   local.get $1
   if
    local.get $0
    local.get $1
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   global.set $~lib/as-proto/Protobuf/READER
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 20576
  i32.const 20624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/generated/bench/Test.Inner.InnerInner#constructor (param $0 i64) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.const 16
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
  local.tee $2
  i64.const 0
  i64.store
  local.get $2
  i32.const 0
  i32.store offset=8
  local.get $2
  i32.const 0
  i32.store offset=12
  local.get $2
  local.get $0
  i64.store
  local.get $2
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
 )
 (func $assembly/generated/bench/Test.Inner.InnerInner.encode (param $0 i32) (param $1 i32)
  (local $2 i64)
  (local $3 i32)
  local.get $1
  i32.const 8
  call $~lib/as-proto/Writer/Writer#uint32@virtual
  local.get $0
  i64.load
  local.set $2
  block $__inlined_func$~lib/as-proto/Writer/Writer#int64@virtual
   block $default
    block $case1
     local.get $1
     i32.const 8
     i32.sub
     i32.load
     local.tee $3
     i32.const 3
     i32.ne
     if
      local.get $3
      i32.const 5
      i32.eq
      br_if $case1
      br $default
     end
     loop $while-continue|0
      local.get $2
      i64.const 127
      i64.gt_u
      if
       local.get $1
       local.get $1
       i32.load offset=4
       local.tee $3
       i32.const 1
       i32.add
       i32.store offset=4
       local.get $3
       local.get $2
       i64.const 127
       i64.and
       i64.const 128
       i64.or
       i64.store8
       local.get $2
       i64.const 7
       i64.shr_u
       local.set $2
       br $while-continue|0
      end
     end
     local.get $1
     local.get $1
     i32.load offset=4
     local.tee $3
     i32.const 1
     i32.add
     i32.store offset=4
     local.get $3
     local.get $2
     i64.store8
     br $__inlined_func$~lib/as-proto/Writer/Writer#int64@virtual
    end
    local.get $1
    i32.load
    local.set $3
    local.get $1
    local.get $2
    i64.const 128
    i64.lt_u
    if (result i32)
     i32.const 1
    else
     local.get $2
     i64.const 16384
     i64.lt_u
     if (result i32)
      i32.const 2
     else
      local.get $2
      i64.const 2097152
      i64.lt_u
      if (result i32)
       i32.const 3
      else
       local.get $2
       i64.const 268435456
       i64.lt_u
       if (result i32)
        i32.const 4
       else
        local.get $2
        i64.const 17179869184
        i64.lt_u
        if (result i32)
         i32.const 5
        else
         local.get $2
         i64.const 2199023255552
         i64.lt_u
         if (result i32)
          i32.const 6
         else
          local.get $2
          i64.const 281474976710656
          i64.lt_u
          if (result i32)
           i32.const 7
          else
           i32.const 8
           i32.const 9
           i32.const 10
           local.get $2
           i64.const 4611686018427387904
           i64.lt_u
           select
           local.get $2
           i64.const 36028797018963968
           i64.lt_u
           select
          end
         end
        end
       end
      end
     end
    end
    local.get $3
    i32.add
    i32.store
    br $__inlined_func$~lib/as-proto/Writer/Writer#int64@virtual
   end
   unreachable
  end
  local.get $1
  i32.const 16
  call $~lib/as-proto/Writer/Writer#uint32@virtual
  local.get $1
  local.get $0
  i32.load offset=8
  call $~lib/as-proto/Writer/Writer#int32@virtual
  local.get $1
  i32.const 24
  call $~lib/as-proto/Writer/Writer#uint32@virtual
  local.get $0
  i32.load offset=12
  local.set $3
  block $__inlined_func$~lib/as-proto/Writer/Writer#sint32@virtual
   block $default0
    block $case11
     local.get $1
     local.tee $0
     i32.const 8
     i32.sub
     i32.load
     local.tee $1
     i32.const 3
     i32.ne
     if
      local.get $1
      i32.const 5
      i32.eq
      br_if $case11
      br $default0
     end
     local.get $3
     i32.const 1
     i32.shl
     local.get $3
     i32.const 31
     i32.shr_s
     i32.xor
     local.set $1
     loop $while-continue|01
      local.get $1
      i32.const 127
      i32.gt_u
      if
       local.get $0
       local.get $0
       i32.load offset=4
       local.tee $3
       i32.const 1
       i32.add
       i32.store offset=4
       local.get $3
       local.get $1
       i32.const 127
       i32.and
       i32.const 128
       i32.or
       i32.store8
       local.get $1
       i32.const 7
       i32.shr_u
       local.set $1
       br $while-continue|01
      end
     end
     local.get $0
     local.get $0
     i32.load offset=4
     local.tee $0
     i32.const 1
     i32.add
     i32.store offset=4
     local.get $0
     local.get $1
     i32.store8
     br $__inlined_func$~lib/as-proto/Writer/Writer#sint32@virtual
    end
    local.get $0
    i32.load
    local.set $1
    local.get $0
    local.get $3
    i32.const 1
    i32.shl
    local.get $3
    i32.const 31
    i32.shr_s
    i32.xor
    local.tee $0
    i32.const 128
    i32.lt_u
    if (result i32)
     i32.const 1
    else
     local.get $0
     i32.const 16384
     i32.lt_u
     if (result i32)
      i32.const 2
     else
      i32.const 3
      i32.const 4
      i32.const 5
      local.get $0
      i32.const 268435456
      i32.lt_u
      select
      local.get $0
      i32.const 2097152
      i32.lt_u
      select
     end
    end
    local.get $1
    i32.add
    i32.store
    br $__inlined_func$~lib/as-proto/Writer/Writer#sint32@virtual
   end
   unreachable
  end
 )
 (func $assembly/generated/bench/Test.encode (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f32)
  (local $6 f64)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner2
   block $folding-inner1
    block $folding-inner0
     global.get $~lib/memory/__stack_pointer
     i32.const 4172
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     local.tee $2
     i64.const 0
     i64.store
     local.get $2
     local.get $0
     i32.load
     local.tee $3
     i32.store
     local.get $3
     if
      local.get $1
      i32.const 10
      call $~lib/as-proto/Writer/Writer#uint32@virtual
      block $__inlined_func$~lib/as-proto/Writer/Writer#string@virtual
       block $default
        block $case1
         local.get $1
         i32.const 8
         i32.sub
         i32.load
         local.tee $2
         i32.const 3
         i32.ne
         if
          local.get $2
          i32.const 5
          i32.eq
          br_if $case1
          br $default
         end
         global.get $~lib/memory/__stack_pointer
         i32.const 4
         i32.sub
         global.set $~lib/memory/__stack_pointer
         global.get $~lib/memory/__stack_pointer
         i32.const 4172
         i32.lt_s
         br_if $folding-inner0
         global.get $~lib/memory/__stack_pointer
         local.tee $4
         i32.const 0
         i32.store
         local.get $1
         local.set $2
         local.get $1
         i32.load offset=12
         local.set $7
         local.get $4
         local.get $1
         i32.load
         i32.load offset=8
         local.tee $4
         i32.store
         local.get $4
         i32.load offset=12
         local.get $7
         i32.le_s
         if (result i32)
          i32.const 0
         else
          global.get $~lib/memory/__stack_pointer
          local.get $2
          i32.load
          i32.load offset=8
          local.tee $4
          i32.store
          local.get $2
          local.get $2
          i32.load offset=12
          local.tee $7
          i32.const 1
          i32.add
          i32.store offset=12
          local.get $4
          local.get $7
          call $~lib/array/Array<i32>#__get
         end
         local.tee $8
         local.set $4
         loop $while-continue|0
          local.get $4
          i32.const 127
          i32.gt_u
          if
           local.get $1
           local.get $1
           i32.load offset=4
           local.tee $7
           i32.const 1
           i32.add
           i32.store offset=4
           local.get $7
           local.get $4
           i32.const 127
           i32.and
           i32.const 128
           i32.or
           i32.store8
           local.get $4
           i32.const 7
           i32.shr_u
           local.set $4
           br $while-continue|0
          end
         end
         local.get $1
         local.get $1
         i32.load offset=4
         local.tee $7
         i32.const 1
         i32.add
         i32.store offset=4
         local.get $7
         local.get $4
         i32.store8
         local.get $3
         i32.const 20
         i32.sub
         i32.load offset=16
         i32.const 1
         i32.shr_u
         local.get $2
         i32.load offset=4
         local.set $4
         i32.const 3
         global.set $~argumentsLength
         i32.const 1
         i32.shl
         local.get $3
         i32.add
         local.set $7
         loop $while-continue|00
          local.get $3
          local.get $7
          i32.lt_u
          if
           local.get $3
           i32.load16_u
           local.tee $9
           i32.const 128
           i32.lt_u
           if (result i32)
            local.get $4
            local.get $9
            i32.store8
            local.get $4
            i32.const 1
            i32.add
           else
            local.get $9
            i32.const 2048
            i32.lt_u
            if (result i32)
             local.get $4
             local.get $9
             i32.const 6
             i32.shr_u
             i32.const 192
             i32.or
             local.get $9
             i32.const 63
             i32.and
             i32.const 128
             i32.or
             i32.const 8
             i32.shl
             i32.or
             i32.store16
             local.get $4
             i32.const 2
             i32.add
            else
             local.get $9
             i32.const 56320
             i32.lt_u
             local.get $7
             local.get $3
             i32.const 2
             i32.add
             i32.gt_u
             i32.and
             local.get $9
             i32.const 63488
             i32.and
             i32.const 55296
             i32.eq
             i32.and
             if
              local.get $3
              i32.load16_u offset=2
              local.tee $10
              i32.const 64512
              i32.and
              i32.const 56320
              i32.eq
              if
               local.get $4
               local.get $9
               i32.const 1023
               i32.and
               i32.const 10
               i32.shl
               i32.const 65536
               i32.add
               local.get $10
               i32.const 1023
               i32.and
               i32.or
               local.tee $9
               i32.const 63
               i32.and
               i32.const 128
               i32.or
               i32.const 24
               i32.shl
               local.get $9
               i32.const 6
               i32.shr_u
               i32.const 63
               i32.and
               i32.const 128
               i32.or
               i32.const 16
               i32.shl
               i32.or
               local.get $9
               i32.const 12
               i32.shr_u
               i32.const 63
               i32.and
               i32.const 128
               i32.or
               i32.const 8
               i32.shl
               i32.or
               local.get $9
               i32.const 18
               i32.shr_u
               i32.const 240
               i32.or
               i32.or
               i32.store
               local.get $4
               i32.const 4
               i32.add
               local.set $4
               local.get $3
               i32.const 4
               i32.add
               local.set $3
               br $while-continue|00
              end
             end
             local.get $4
             local.get $9
             i32.const 12
             i32.shr_u
             i32.const 224
             i32.or
             local.get $9
             i32.const 6
             i32.shr_u
             i32.const 63
             i32.and
             i32.const 128
             i32.or
             i32.const 8
             i32.shl
             i32.or
             i32.store16
             local.get $4
             local.get $9
             i32.const 63
             i32.and
             i32.const 128
             i32.or
             i32.store8 offset=2
             local.get $4
             i32.const 3
             i32.add
            end
           end
           local.set $4
           local.get $3
           i32.const 2
           i32.add
           local.set $3
           br $while-continue|00
          end
         end
         local.get $2
         local.get $8
         local.get $2
         i32.load offset=4
         i32.add
         i32.store offset=4
         br $__inlined_func$~lib/as-proto/Writer/Writer#string@virtual
        end
        global.get $~lib/memory/__stack_pointer
        i32.const 4
        i32.sub
        global.set $~lib/memory/__stack_pointer
        global.get $~lib/memory/__stack_pointer
        i32.const 4172
        i32.lt_s
        br_if $folding-inner2
        global.get $~lib/memory/__stack_pointer
        i32.const 0
        i32.store
        local.get $3
        i32.const 20
        i32.sub
        i32.load offset=16
        local.get $3
        i32.add
        local.set $2
        loop $while-continue|01
         local.get $2
         local.get $3
         i32.gt_u
         if
          local.get $3
          i32.load16_u
          local.tee $7
          i32.const 128
          i32.lt_u
          if (result i32)
           local.get $4
           i32.const 1
           i32.add
          else
           local.get $7
           i32.const 2048
           i32.lt_u
           if (result i32)
            local.get $4
            i32.const 2
            i32.add
           else
            local.get $7
            i32.const 64512
            i32.and
            i32.const 55296
            i32.eq
            local.get $2
            local.get $3
            i32.const 2
            i32.add
            i32.gt_u
            i32.and
            if
             local.get $3
             i32.load16_u offset=2
             i32.const 64512
             i32.and
             i32.const 56320
             i32.eq
             if
              local.get $4
              i32.const 4
              i32.add
              local.set $4
              local.get $3
              i32.const 4
              i32.add
              local.set $3
              br $while-continue|01
             end
            end
            local.get $4
            i32.const 3
            i32.add
           end
          end
          local.set $4
          local.get $3
          i32.const 2
          i32.add
          local.set $3
          br $while-continue|01
         end
        end
        global.get $~lib/memory/__stack_pointer
        local.get $1
        i32.load offset=8
        local.tee $2
        i32.store
        local.get $2
        local.get $4
        call $~lib/array/Array<i32>#push
        local.get $1
        local.get $4
        i32.const 128
        i32.lt_u
        if (result i32)
         i32.const 1
        else
         local.get $4
         i32.const 16384
         i32.lt_u
         if (result i32)
          i32.const 2
         else
          i32.const 3
          i32.const 4
          i32.const 5
          local.get $4
          i32.const 268435456
          i32.lt_u
          select
          local.get $4
          i32.const 2097152
          i32.lt_u
          select
         end
        end
        local.get $1
        i32.load
        i32.add
        i32.store
        local.get $1
        local.get $4
        local.get $1
        i32.load
        i32.add
        i32.store
        br $__inlined_func$~lib/as-proto/Writer/Writer#string@virtual
       end
       unreachable
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 4
      i32.add
      global.set $~lib/memory/__stack_pointer
     end
     local.get $1
     i32.const 16
     call $~lib/as-proto/Writer/Writer#uint32@virtual
     local.get $1
     local.get $0
     i32.load offset=4
     call $~lib/as-proto/Writer/Writer#uint32@virtual
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=8
     local.tee $2
     i32.store offset=4
     local.get $2
     if
      local.get $1
      i32.const 26
      call $~lib/as-proto/Writer/Writer#uint32@virtual
      local.get $1
      call $~lib/as-proto/Writer/Writer#fork@virtual
      global.get $~lib/memory/__stack_pointer
      i32.const 4
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 4172
      i32.lt_s
      br_if $folding-inner0
      global.get $~lib/memory/__stack_pointer
      i32.const 0
      i32.store
      local.get $1
      i32.const 8
      call $~lib/as-proto/Writer/Writer#uint32@virtual
      local.get $1
      local.get $2
      i32.load
      call $~lib/as-proto/Writer/Writer#int32@virtual
      local.get $2
      i32.load offset=4
      local.tee $3
      if
       local.get $1
       i32.const 18
       call $~lib/as-proto/Writer/Writer#uint32@virtual
       local.get $1
       call $~lib/as-proto/Writer/Writer#fork@virtual
       local.get $3
       local.get $1
       call $assembly/generated/bench/Test.Inner.InnerInner.encode
       local.get $1
       call $~lib/as-proto/Writer/Writer#ldelim@virtual
      end
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.load offset=8
      local.tee $2
      i32.store
      local.get $2
      if
       local.get $1
       i32.const 26
       call $~lib/as-proto/Writer/Writer#uint32@virtual
       local.get $1
       call $~lib/as-proto/Writer/Writer#fork@virtual
       i32.const 0
       local.set $4
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.sub
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 4172
       i32.lt_s
       br_if $folding-inner1
       global.get $~lib/memory/__stack_pointer
       local.tee $3
       i32.const 0
       i32.store
       local.get $3
       local.get $2
       i32.load
       local.tee $3
       i32.store
       local.get $3
       i32.load offset=12
       if
        local.get $1
        i32.const 10
        call $~lib/as-proto/Writer/Writer#uint32@virtual
        local.get $1
        call $~lib/as-proto/Writer/Writer#fork@virtual
        loop $for-loop|0
         local.get $3
         i32.load offset=12
         local.get $4
         i32.gt_s
         if
          local.get $3
          i32.load offset=12
          local.get $4
          i32.le_u
          if
           i32.const 1248
           i32.const 1776
           i32.const 114
           i32.const 42
           call $~lib/builtins/abort
           unreachable
          end
          local.get $4
          local.get $3
          i32.load offset=4
          i32.add
          i32.load8_u
          local.set $7
          block $__inlined_func$~lib/as-proto/Writer/Writer#bool@virtual
           block $default2
            block $case13
             local.get $1
             i32.const 8
             i32.sub
             i32.load
             local.tee $8
             i32.const 3
             i32.ne
             if
              local.get $8
              i32.const 5
              i32.eq
              br_if $case13
              br $default2
             end
             local.get $1
             i32.load offset=4
             local.get $7
             i32.eqz
             i32.eqz
             i32.store8
             local.get $1
             local.get $1
             i32.load offset=4
             i32.const 1
             i32.add
             i32.store offset=4
             br $__inlined_func$~lib/as-proto/Writer/Writer#bool@virtual
            end
            local.get $1
            local.get $1
            i32.load
            i32.const 1
            i32.add
            i32.store
            br $__inlined_func$~lib/as-proto/Writer/Writer#bool@virtual
           end
           unreachable
          end
          local.get $4
          i32.const 1
          i32.add
          local.set $4
          br $for-loop|0
         end
        end
        local.get $1
        call $~lib/as-proto/Writer/Writer#ldelim@virtual
       end
       local.get $1
       i32.const 17
       call $~lib/as-proto/Writer/Writer#uint32@virtual
       local.get $2
       f64.load offset=8
       local.set $6
       block $__inlined_func$~lib/as-proto/Writer/Writer#double@virtual
        block $default1
         block $case12
          local.get $1
          i32.const 8
          i32.sub
          i32.load
          local.tee $2
          i32.const 3
          i32.ne
          if
           local.get $2
           i32.const 5
           i32.eq
           br_if $case12
           br $default1
          end
          local.get $1
          i32.load offset=4
          local.get $6
          f64.store
          local.get $1
          local.get $1
          i32.load offset=4
          i32.const 8
          i32.add
          i32.store offset=4
          br $__inlined_func$~lib/as-proto/Writer/Writer#double@virtual
         end
         local.get $1
         local.get $1
         i32.load
         i32.const 8
         i32.add
         i32.store
         br $__inlined_func$~lib/as-proto/Writer/Writer#double@virtual
        end
        unreachable
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.add
       global.set $~lib/memory/__stack_pointer
       local.get $1
       call $~lib/as-proto/Writer/Writer#ldelim@virtual
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 4
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $1
      call $~lib/as-proto/Writer/Writer#ldelim@virtual
     end
     local.get $1
     i32.const 37
     call $~lib/as-proto/Writer/Writer#uint32@virtual
     local.get $0
     f32.load offset=12
     local.set $5
     block $__inlined_func$~lib/as-proto/Writer/Writer#float@virtual
      block $default0
       block $case11
        local.get $1
        i32.const 8
        i32.sub
        i32.load
        local.tee $0
        i32.const 3
        i32.ne
        if
         local.get $0
         i32.const 5
         i32.eq
         br_if $case11
         br $default0
        end
        local.get $1
        i32.load offset=4
        local.get $5
        f32.store
        local.get $1
        local.get $1
        i32.load offset=4
        i32.const 4
        i32.add
        i32.store offset=4
        br $__inlined_func$~lib/as-proto/Writer/Writer#float@virtual
       end
       local.get $1
       local.get $1
       i32.load
       i32.const 4
       i32.add
       i32.store
       br $__inlined_func$~lib/as-proto/Writer/Writer#float@virtual
      end
      unreachable
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
     return
    end
   end
  end
  i32.const 20576
  i32.const 20624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/rt/itcms/__renew (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 20
  i32.sub
  local.tee $3
  i32.load
  i32.const -4
  i32.and
  i32.const 16
  i32.sub
  local.get $1
  i32.ge_u
  if
   local.get $3
   local.get $1
   i32.store offset=16
   local.get $0
   return
  end
  local.get $1
  local.get $3
  i32.load offset=12
  call $~lib/rt/itcms/__new
  local.tee $2
  local.get $0
  local.get $1
  local.get $3
  i32.load offset=16
  local.tee $0
  local.get $0
  local.get $1
  i32.gt_u
  select
  call $~lib/memory/memory.copy
  local.get $2
 )
 (func $~lib/array/ensureCapacity (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  local.get $0
  i32.load offset=8
  local.tee $4
  local.get $2
  i32.shr_u
  local.get $1
  i32.lt_u
  if
   i32.const 1073741820
   local.get $2
   i32.shr_u
   local.get $1
   i32.lt_u
   if
    i32.const 1552
    i32.const 1776
    i32.const 19
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 8
   local.get $1
   i32.const 8
   i32.gt_u
   select
   local.get $2
   i32.shl
   local.set $1
   local.get $0
   i32.load
   local.tee $2
   local.get $3
   if
    local.get $4
    i32.const 1
    i32.shl
    local.tee $3
    i32.const 1073741820
    local.get $3
    i32.const 1073741820
    i32.lt_u
    select
    local.tee $3
    local.get $1
    local.get $1
    local.get $3
    i32.lt_u
    select
    local.set $1
   end
   local.get $1
   call $~lib/rt/itcms/__renew
   local.tee $3
   local.get $2
   i32.ne
   if
    local.get $0
    local.get $3
    i32.store
    local.get $0
    local.get $3
    i32.store offset=4
    local.get $3
    if
     local.get $0
     local.get $3
     call $byn-split-outlined-A$~lib/rt/itcms/__link
    end
   end
   local.get $0
   local.get $1
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<bool>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.const 1
  i32.add
  local.tee $3
  i32.const 0
  i32.const 1
  call $~lib/array/ensureCapacity
  local.get $2
  local.get $0
  i32.load offset=4
  i32.add
  local.get $1
  i32.store8
  local.get $0
  local.get $3
  i32.store offset=12
 )
 (func $~lib/array/Array<i32>#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=12
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1776
   i32.const 114
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<i32>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.const 1
  i32.add
  local.tee $3
  i32.const 2
  i32.const 1
  call $~lib/array/ensureCapacity
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
 )
 (func $~lib/as-proto/internal/FixedReader/FixedReader#varint32 (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  local.get $0
  i32.load
  local.tee $1
  i32.const 1
  i32.add
  i32.store
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.le_u
  drop
  local.get $1
  i32.load8_u
  local.tee $2
  i32.const 127
  i32.and
  local.set $1
  block $folding-inner0
   local.get $2
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   local.tee $2
   i32.const 127
   i32.and
   i32.const 7
   i32.shl
   local.get $1
   i32.or
   local.set $1
   local.get $2
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   local.tee $2
   i32.const 127
   i32.and
   i32.const 14
   i32.shl
   local.get $1
   i32.or
   local.set $1
   local.get $2
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   local.tee $2
   i32.const 127
   i32.and
   i32.const 21
   i32.shl
   local.get $1
   i32.or
   local.set $1
   local.get $2
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   local.tee $2
   i32.const 15
   i32.and
   i32.const 28
   i32.shl
   local.get $1
   i32.or
   local.set $1
   local.get $2
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i32.load8_u
   i32.const 128
   i32.lt_u
   br_if $folding-inner0
   local.get $1
   return
  end
  local.get $1
 )
 (func $~lib/as-proto/internal/FixedReader/FixedReader#varint64 (param $0 i32) (result i64)
  (local $1 i64)
  (local $2 i32)
  (local $3 i64)
  local.get $0
  local.get $0
  i32.load
  local.tee $2
  i32.const 1
  i32.add
  i32.store
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.le_u
  drop
  local.get $2
  i64.load8_u
  local.tee $3
  i64.const 127
  i64.and
  local.set $1
  block $folding-inner0
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   local.tee $3
   i64.const 127
   i64.and
   i64.const 7
   i64.shl
   local.get $1
   i64.or
   local.set $1
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   local.tee $3
   i64.const 127
   i64.and
   i64.const 14
   i64.shl
   local.get $1
   i64.or
   local.set $1
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   local.tee $3
   i64.const 127
   i64.and
   i64.const 21
   i64.shl
   local.get $1
   i64.or
   local.set $1
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   local.tee $3
   i64.const 127
   i64.and
   i64.const 28
   i64.shl
   local.get $1
   i64.or
   local.set $1
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   local.tee $3
   i64.const 127
   i64.and
   i64.const 35
   i64.shl
   local.get $1
   i64.or
   local.set $1
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   local.tee $3
   i64.const 127
   i64.and
   i64.const 42
   i64.shl
   local.get $1
   i64.or
   local.set $1
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   local.tee $3
   i64.const 127
   i64.and
   i64.const 49
   i64.shl
   local.get $1
   i64.or
   local.set $1
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   local.tee $3
   i64.const 127
   i64.and
   i64.const 56
   i64.shl
   local.get $1
   i64.or
   local.set $1
   local.get $3
   i64.const 128
   i64.lt_u
   br_if $folding-inner0
   local.get $0
   local.get $0
   i32.load
   local.tee $2
   i32.const 1
   i32.add
   i32.store
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.le_u
   drop
   local.get $2
   i64.load8_u
   i64.const 1
   i64.and
   i64.const 63
   i64.shl
   local.get $1
   i64.or
   return
  end
  local.get $1
 )
 (func $~lib/as-proto/Writer/Writer#uint32@virtual (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $default
   block $case1
    local.get $0
    i32.const 8
    i32.sub
    i32.load
    local.tee $2
    i32.const 3
    i32.ne
    if
     local.get $2
     i32.const 5
     i32.eq
     br_if $case1
     br $default
    end
    loop $while-continue|0
     local.get $1
     i32.const 127
     i32.gt_u
     if
      local.get $0
      local.get $0
      i32.load offset=4
      local.tee $2
      i32.const 1
      i32.add
      i32.store offset=4
      local.get $2
      local.get $1
      i32.const 127
      i32.and
      i32.const 128
      i32.or
      i32.store8
      local.get $1
      i32.const 7
      i32.shr_u
      local.set $1
      br $while-continue|0
     end
    end
    local.get $0
    local.get $0
    i32.load offset=4
    local.tee $0
    i32.const 1
    i32.add
    i32.store offset=4
    local.get $0
    local.get $1
    i32.store8
    return
   end
   local.get $0
   i32.load
   local.set $2
   local.get $0
   local.get $1
   i32.const 128
   i32.lt_u
   if (result i32)
    i32.const 1
   else
    local.get $1
    i32.const 16384
    i32.lt_u
    if (result i32)
     i32.const 2
    else
     i32.const 3
     i32.const 4
     i32.const 5
     local.get $1
     i32.const 268435456
     i32.lt_u
     select
     local.get $1
     i32.const 2097152
     i32.lt_u
     select
    end
   end
   local.get $2
   i32.add
   i32.store
   return
  end
  unreachable
 )
 (func $~lib/as-proto/Writer/Writer#fork@virtual (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $folding-inner0
   block $default
    block $case1
     local.get $0
     i32.const 8
     i32.sub
     i32.load
     local.tee $1
     i32.const 3
     i32.ne
     if
      local.get $1
      i32.const 5
      i32.eq
      br_if $case1
      br $default
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 4172
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     local.tee $1
     i32.const 0
     i32.store
     local.get $0
     i32.load offset=12
     local.set $2
     local.get $1
     local.get $0
     i32.load
     i32.load offset=8
     local.tee $1
     i32.store
     local.get $1
     i32.load offset=12
     local.get $2
     i32.le_s
     if (result i32)
      i32.const 0
     else
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load
      i32.load offset=8
      local.tee $1
      i32.store
      local.get $0
      local.get $0
      i32.load offset=12
      local.tee $2
      i32.const 1
      i32.add
      i32.store offset=12
      local.get $1
      local.get $2
      call $~lib/array/Array<i32>#__get
     end
     local.set $1
     loop $while-continue|0
      local.get $1
      i32.const 127
      i32.gt_u
      if
       local.get $0
       local.get $0
       i32.load offset=4
       local.tee $2
       i32.const 1
       i32.add
       i32.store offset=4
       local.get $2
       local.get $1
       i32.const 127
       i32.and
       i32.const 128
       i32.or
       i32.store8
       local.get $1
       i32.const 7
       i32.shr_u
       local.set $1
       br $while-continue|0
      end
     end
     local.get $0
     local.get $0
     i32.load offset=4
     local.tee $0
     i32.const 1
     i32.add
     i32.store offset=4
     local.get $0
     local.get $1
     i32.store8
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     return
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4172
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i64.const 0
    i64.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.tee $1
    i32.store
    local.get $1
    local.get $0
    i32.load
    call $~lib/array/Array<i32>#push
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=12
    local.tee $1
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=8
    local.tee $2
    i32.store offset=4
    local.get $1
    local.get $2
    i32.load offset=12
    call $~lib/array/Array<i32>#push
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=8
    local.tee $0
    i32.store
    local.get $0
    i32.const 0
    call $~lib/array/Array<i32>#push
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.add
    global.set $~lib/memory/__stack_pointer
    return
   end
   unreachable
  end
  i32.const 20576
  i32.const 20624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/as-proto/Writer/Writer#int32@virtual (param $0 i32) (param $1 i32)
  (local $2 i64)
  (local $3 i32)
  block $default
   block $case1
    local.get $0
    i32.const 8
    i32.sub
    i32.load
    local.tee $3
    i32.const 3
    i32.ne
    if
     local.get $3
     i32.const 5
     i32.eq
     br_if $case1
     br $default
    end
    local.get $1
    i32.const 0
    i32.lt_s
    if
     local.get $1
     i64.extend_i32_s
     local.set $2
     loop $while-continue|0
      local.get $2
      i64.const 127
      i64.gt_u
      if
       local.get $0
       local.get $0
       i32.load offset=4
       local.tee $1
       i32.const 1
       i32.add
       i32.store offset=4
       local.get $1
       local.get $2
       i64.const 127
       i64.and
       i64.const 128
       i64.or
       i64.store8
       local.get $2
       i64.const 7
       i64.shr_u
       local.set $2
       br $while-continue|0
      end
     end
     local.get $0
     local.get $0
     i32.load offset=4
     local.tee $0
     i32.const 1
     i32.add
     i32.store offset=4
     local.get $0
     local.get $2
     i64.store8
    else
     loop $while-continue|1
      local.get $1
      i32.const 127
      i32.gt_u
      if
       local.get $0
       local.get $0
       i32.load offset=4
       local.tee $3
       i32.const 1
       i32.add
       i32.store offset=4
       local.get $3
       local.get $1
       i32.const 127
       i32.and
       i32.const 128
       i32.or
       i32.store8
       local.get $1
       i32.const 7
       i32.shr_u
       local.set $1
       br $while-continue|1
      end
     end
     local.get $0
     local.get $0
     i32.load offset=4
     local.tee $0
     i32.const 1
     i32.add
     i32.store offset=4
     local.get $0
     local.get $1
     i32.store8
    end
    return
   end
   local.get $1
   i32.const 0
   i32.lt_s
   if
    local.get $0
    local.get $0
    i32.load
    i32.const 10
    i32.add
    i32.store
   else
    local.get $0
    i32.load
    local.set $3
    local.get $0
    local.get $1
    i32.const 128
    i32.lt_u
    if (result i32)
     i32.const 1
    else
     local.get $1
     i32.const 16384
     i32.lt_u
     if (result i32)
      i32.const 2
     else
      i32.const 3
      i32.const 4
      i32.const 5
      local.get $1
      i32.const 268435456
      i32.lt_u
      select
      local.get $1
      i32.const 2097152
      i32.lt_u
      select
     end
    end
    local.get $3
    i32.add
    i32.store
   end
   return
  end
  unreachable
 )
 (func $~lib/as-proto/Writer/Writer#ldelim@virtual (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  block $folding-inner0
   block $default
    block $case1
     local.get $0
     i32.const 8
     i32.sub
     i32.load
     local.tee $1
     i32.const 3
     i32.ne
     if
      local.get $1
      i32.const 5
      i32.eq
      br_if $case1
      br $default
     end
     return
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4172
    i32.lt_s
    if
     i32.const 20576
     i32.const 20624
     i32.const 1
     i32.const 1
     call $~lib/builtins/abort
     unreachable
    end
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 0
    i32.store
    local.get $1
    local.get $0
    i32.load offset=4
    local.tee $1
    i32.store
    local.get $1
    i32.load offset=12
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=12
     local.tee $1
     i32.store
     local.get $1
     i32.load offset=12
     drop
    end
    local.get $0
    i32.load
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=4
    local.tee $2
    i32.store
    local.get $2
    i32.load offset=12
    local.tee $1
    i32.const 0
    i32.le_s
    br_if $folding-inner0
    local.get $2
    i32.load offset=4
    local.get $1
    i32.const 1
    i32.sub
    local.tee $4
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.set $1
    local.get $2
    local.get $4
    i32.store offset=12
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=12
    local.tee $4
    i32.store
    local.get $4
    i32.load offset=12
    local.tee $2
    i32.const 0
    i32.le_s
    br_if $folding-inner0
    local.get $4
    i32.load offset=4
    local.get $2
    i32.const 1
    i32.sub
    local.tee $5
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.set $2
    local.get $4
    local.get $5
    i32.store offset=12
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=8
    local.tee $4
    i32.store
    local.get $4
    i32.load offset=12
    local.get $2
    i32.le_u
    if
     local.get $2
     i32.const 0
     i32.lt_s
     if
      i32.const 1248
      i32.const 1776
      i32.const 130
      i32.const 22
      call $~lib/builtins/abort
      unreachable
     end
     local.get $4
     local.get $2
     i32.const 1
     i32.add
     local.tee $5
     i32.const 2
     i32.const 1
     call $~lib/array/ensureCapacity
     local.get $4
     local.get $5
     i32.store offset=12
    end
    local.get $4
    i32.load offset=4
    local.get $2
    i32.const 2
    i32.shl
    i32.add
    local.get $3
    local.get $1
    i32.sub
    local.tee $1
    i32.store
    local.get $0
    local.get $1
    i32.const 128
    i32.lt_u
    if (result i32)
     i32.const 1
    else
     local.get $1
     i32.const 16384
     i32.lt_u
     if (result i32)
      i32.const 2
     else
      i32.const 3
      i32.const 4
      i32.const 5
      local.get $1
      i32.const 268435456
      i32.lt_u
      select
      local.get $1
      i32.const 2097152
      i32.lt_u
      select
     end
    end
    local.get $0
    i32.load
    i32.add
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    return
   end
   unreachable
  end
  i32.const 2064
  i32.const 1776
  i32.const 291
  i32.const 18
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/as-proto/Reader/Reader#skipType@virtual (param $0 i32) (param $1 i32)
  local.get $0
  i32.const 8
  i32.sub
  i32.load
  i32.const 9
  i32.eq
  if
   local.get $0
   local.get $1
   call $~lib/as-proto/internal/FixedReader/FixedReader#skipType
   return
  end
  unreachable
 )
 (func $~lib/as-proto/Reader/Reader#bool@virtual (param $0 i32) (result i32)
  local.get $0
  i32.const 8
  i32.sub
  i32.load
  i32.const 9
  i32.eq
  if
   local.get $0
   call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
   i32.const 0
   i32.ne
   return
  end
  unreachable
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  block $folding-inner4
   block $folding-inner3
    block $folding-inner2
     block $folding-inner1
      block $folding-inner0
       block $invalid
        block $~lib/as-proto/Reader/Reader
         block $~lib/as-proto/internal/FixedSizer/FixedSizer
          block $~lib/as-proto/Writer/Writer
           block $~lib/string/String
            block $~lib/arraybuffer/ArrayBuffer
             local.get $0
             i32.const 8
             i32.sub
             i32.load
             br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $folding-inner1 $folding-inner2 $~lib/as-proto/Writer/Writer $~lib/as-proto/internal/FixedSizer/FixedSizer $folding-inner0 $folding-inner0 $folding-inner1 $folding-inner3 $~lib/as-proto/Reader/Reader $folding-inner2 $folding-inner3 $folding-inner1 $folding-inner0 $folding-inner4 $folding-inner4 $invalid
            end
            return
           end
           return
          end
          return
         end
         local.get $0
         i32.load offset=4
         local.tee $1
         if
          local.get $1
          call $byn-split-outlined-A$~lib/rt/itcms/__visit
         end
         local.get $0
         i32.load offset=8
         local.tee $1
         if
          local.get $1
          call $byn-split-outlined-A$~lib/rt/itcms/__visit
         end
         local.get $0
         i32.load offset=12
         local.tee $0
         if
          local.get $0
          call $byn-split-outlined-A$~lib/rt/itcms/__visit
         end
         return
        end
        return
       end
       unreachable
      end
      local.get $0
      i32.load
      local.tee $0
      if
       local.get $0
       call $byn-split-outlined-A$~lib/rt/itcms/__visit
      end
      return
     end
     local.get $0
     i32.load
     local.tee $0
     if
      local.get $0
      call $byn-split-outlined-A$~lib/rt/itcms/__visit
     end
     return
    end
    local.get $0
    i32.load
    local.tee $1
    if
     local.get $1
     call $byn-split-outlined-A$~lib/rt/itcms/__visit
    end
   end
   local.get $0
   i32.load offset=8
   local.tee $0
   if
    local.get $0
    call $byn-split-outlined-A$~lib/rt/itcms/__visit
   end
   return
  end
  local.get $0
  i32.load offset=4
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
 )
 (func $~start
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i64.const 0
  i64.store
  local.get $0
  i64.const 0
  i64.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=16
  call $start:~lib/as-proto/index
  global.get $~lib/memory/__stack_pointer
  i32.const 1664
  i32.store
  i64.const 682671883329470464
  i32.const -42
  call $assembly/generated/bench/Test.Inner.InnerInner#constructor
  local.set $0
  i32.const 7
  i32.const 0
  i32.const 14
  i32.const 1744
  call $~lib/rt/__newArray
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=12
  local.get $1
  f64.const 204.8
  call $assembly/generated/bench/Outer#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  i32.const 20161110
  local.get $0
  local.get $1
  call $assembly/generated/bench/Test.Inner#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  i32.const 1664
  i32.const 9000
  local.get $0
  f32.const 0.25
  call $assembly/generated/bench/Test#constructor
  global.set $assembly/static_aspr/testDecoded
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/static_aspr/testDecoded
  local.tee $0
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 1824
  i32.store
  local.get $0
  call $~lib/as-proto/Protobuf/Protobuf.encode<assembly/generated/bench/Test>
  global.set $assembly/static_aspr/testEncoded
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/as-proto/Protobuf/Protobuf.encode<assembly/generated/bench/Test> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i64.const 0
   i64.store
   local.get $1
   global.get $~lib/as-proto/Protobuf/WRITER
   i32.load
   local.tee $2
   i32.store
   local.get $1
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $2
   i32.const 0
   i32.store
   local.get $1
   local.get $2
   i32.load offset=4
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.const 2
   i32.const 0
   call $~lib/array/ensureCapacity
   local.get $1
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.load offset=8
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.const 2
   i32.const 0
   call $~lib/array/ensureCapacity
   local.get $1
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.load offset=12
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.const 2
   i32.const 0
   call $~lib/array/ensureCapacity
   local.get $1
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/as-proto/Protobuf/WRITER
   i32.load
   local.tee $1
   i32.store offset=4
   i32.const 2
   global.set $~argumentsLength
   local.get $0
   local.get $1
   i32.const 1824
   i32.load
   call_indirect $0 (type $i32_i32_=>_none)
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/as-proto/Protobuf/WRITER
   local.tee $1
   i32.store
   local.get $1
   local.get $1
   i32.load
   i32.load
   call $~lib/typedarray/Uint8Array#constructor
   local.tee $2
   i32.store offset=8
   local.get $2
   if
    local.get $1
    local.get $2
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   local.get $1
   local.get $1
   i32.load offset=8
   i32.load offset=4
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/as-proto/Protobuf/WRITER
   local.tee $1
   i32.store offset=4
   i32.const 2
   global.set $~argumentsLength
   local.get $0
   local.get $1
   i32.const 1824
   i32.load
   call_indirect $0 (type $i32_i32_=>_none)
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/as-proto/Protobuf/WRITER
   local.tee $0
   i32.store
   local.get $0
   i32.load offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 20576
  i32.const 20624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/static_aspr/encode
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i64.const 0
  i64.store
  local.get $0
  global.get $assembly/static_aspr/testDecoded
  local.tee $1
  i32.store
  local.get $0
  i32.const 1824
  i32.store offset=4
  local.get $1
  call $~lib/as-proto/Protobuf/Protobuf.encode<assembly/generated/bench/Test>
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/generated/bench/Test.decode (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 f32)
  (local $5 f64)
  (local $6 i64)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   local.get $1
   i32.const 0
   i32.lt_s
   if (result i32)
    local.get $0
    i32.load offset=4
   else
    local.get $1
    local.get $0
    i32.load
    i32.add
   end
   local.set $7
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 1856
   i32.store
   local.get $1
   i32.const 1856
   i32.const 0
   i32.const 0
   f32.const 0
   call $assembly/generated/bench/Test#constructor
   local.tee $8
   i32.store offset=4
   loop $while-continue|0
    local.get $7
    local.get $0
    i32.load
    i32.gt_u
    if
     block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual
      local.get $0
      i32.const 8
      i32.sub
      i32.load
      i32.const 9
      i32.eq
      if
       local.get $0
       call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
       local.set $1
       br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual
      end
      unreachable
     end
     block $case4|1
      block $case3|1
       block $case2|1
        block $case1|1
         block $case0|1
          local.get $1
          i32.const 3
          i32.shr_u
          i32.const 1
          i32.sub
          br_table $case0|1 $case1|1 $case2|1 $case3|1 $case4|1
         end
         block $__inlined_func$~lib/as-proto/Reader/Reader#string@virtual
          local.get $0
          i32.const 8
          i32.sub
          i32.load
          i32.const 9
          i32.eq
          if
           global.get $~lib/memory/__stack_pointer
           i32.const 4
           i32.sub
           global.set $~lib/memory/__stack_pointer
           global.get $~lib/memory/__stack_pointer
           i32.const 4172
           i32.lt_s
           br_if $folding-inner1
           global.get $~lib/memory/__stack_pointer
           local.tee $1
           i32.const 0
           i32.store
           local.get $1
           i32.const 4
           i32.sub
           global.set $~lib/memory/__stack_pointer
           global.get $~lib/memory/__stack_pointer
           i32.const 4172
           i32.lt_s
           br_if $folding-inner1
           global.get $~lib/memory/__stack_pointer
           i32.const 0
           i32.store
           local.get $0
           call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
           local.set $2
           global.get $~lib/memory/__stack_pointer
           local.get $2
           call $~lib/typedarray/Uint8Array#constructor
           local.tee $9
           i32.store
           local.get $9
           i32.load offset=4
           local.get $0
           local.get $2
           local.get $0
           i32.load
           local.tee $10
           i32.add
           i32.store
           local.get $0
           i32.load
           local.get $0
           i32.load offset=4
           i32.le_u
           drop
           local.get $10
           local.get $2
           call $~lib/memory/memory.copy
           global.get $~lib/memory/__stack_pointer
           i32.const 4
           i32.add
           global.set $~lib/memory/__stack_pointer
           local.get $1
           local.get $9
           i32.store
           local.get $9
           i32.load offset=4
           local.set $3
           local.get $9
           i32.load offset=8
           local.set $1
           global.get $~lib/memory/__stack_pointer
           i32.const 4
           i32.sub
           global.set $~lib/memory/__stack_pointer
           global.get $~lib/memory/__stack_pointer
           i32.const 4172
           i32.lt_s
           br_if $folding-inner1
           global.get $~lib/memory/__stack_pointer
           local.tee $2
           i32.const 0
           i32.store
           local.get $1
           local.get $3
           i32.add
           local.set $10
           local.get $2
           local.get $1
           i32.const 1
           i32.shl
           i32.const 1
           call $~lib/rt/itcms/__new
           local.tee $2
           i32.store
           local.get $2
           local.set $1
           loop $while-continue|00
            local.get $3
            local.get $10
            i32.lt_u
            if
             block $while-break|0
              local.get $3
              i32.load8_u
              local.set $9
              local.get $3
              i32.const 1
              i32.add
              local.set $3
              local.get $9
              i32.const 128
              i32.and
              if
               local.get $3
               local.get $10
               i32.eq
               br_if $while-break|0
               local.get $3
               i32.load8_u
               i32.const 63
               i32.and
               local.set $11
               local.get $3
               i32.const 1
               i32.add
               local.set $3
               local.get $9
               i32.const 224
               i32.and
               i32.const 192
               i32.eq
               if
                local.get $1
                local.get $11
                local.get $9
                i32.const 31
                i32.and
                i32.const 6
                i32.shl
                i32.or
                i32.store16
               else
                local.get $3
                local.get $10
                i32.eq
                br_if $while-break|0
                local.get $3
                i32.load8_u
                i32.const 63
                i32.and
                local.set $12
                local.get $3
                i32.const 1
                i32.add
                local.set $3
                local.get $9
                i32.const 240
                i32.and
                i32.const 224
                i32.eq
                if
                 local.get $12
                 local.get $9
                 i32.const 15
                 i32.and
                 i32.const 12
                 i32.shl
                 local.get $11
                 i32.const 6
                 i32.shl
                 i32.or
                 i32.or
                 local.set $9
                else
                 local.get $3
                 local.get $10
                 i32.eq
                 br_if $while-break|0
                 local.get $3
                 i32.load8_u
                 i32.const 63
                 i32.and
                 local.get $9
                 i32.const 7
                 i32.and
                 i32.const 18
                 i32.shl
                 local.get $11
                 i32.const 12
                 i32.shl
                 i32.or
                 local.get $12
                 i32.const 6
                 i32.shl
                 i32.or
                 i32.or
                 local.set $9
                 local.get $3
                 i32.const 1
                 i32.add
                 local.set $3
                end
                local.get $9
                i32.const 65536
                i32.lt_u
                if
                 local.get $1
                 local.get $9
                 i32.store16
                else
                 local.get $1
                 local.get $9
                 i32.const 65536
                 i32.sub
                 local.tee $9
                 i32.const 10
                 i32.shr_u
                 i32.const 55296
                 i32.or
                 local.get $9
                 i32.const 1023
                 i32.and
                 i32.const 56320
                 i32.or
                 i32.const 16
                 i32.shl
                 i32.or
                 i32.store
                 local.get $1
                 i32.const 2
                 i32.add
                 local.set $1
                end
               end
              else
               local.get $1
               local.get $9
               i32.store16
              end
              local.get $1
              i32.const 2
              i32.add
              local.set $1
              br $while-continue|00
             end
            end
           end
           local.get $2
           local.get $1
           local.get $2
           i32.sub
           call $~lib/rt/itcms/__renew
           local.set $1
           global.get $~lib/memory/__stack_pointer
           i32.const 4
           i32.add
           global.set $~lib/memory/__stack_pointer
           global.get $~lib/memory/__stack_pointer
           i32.const 4
           i32.add
           global.set $~lib/memory/__stack_pointer
           br $__inlined_func$~lib/as-proto/Reader/Reader#string@virtual
          end
          unreachable
         end
         local.get $8
         local.get $1
         i32.store
         local.get $1
         if
          local.get $8
          local.get $1
          call $byn-split-outlined-A$~lib/rt/itcms/__link
         end
         br $while-continue|0
        end
        block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual0
         local.get $0
         i32.const 8
         i32.sub
         i32.load
         i32.const 9
         i32.eq
         if
          local.get $0
          call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
          local.set $1
          br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual0
         end
         unreachable
        end
        local.get $8
        local.get $1
        i32.store offset=4
        br $while-continue|0
       end
       local.get $0
       local.set $1
       block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual1
        local.get $0
        i32.const 8
        i32.sub
        i32.load
        i32.const 9
        i32.eq
        if
         local.get $1
         call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
         local.set $1
         br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual1
        end
        unreachable
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.sub
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 4172
       i32.lt_s
       br_if $folding-inner1
       global.get $~lib/memory/__stack_pointer
       i32.const 0
       i32.store
       local.get $1
       i32.const 0
       i32.lt_s
       if (result i32)
        local.get $0
        i32.load offset=4
       else
        local.get $1
        local.get $0
        i32.load
        i32.add
       end
       local.set $2
       global.get $~lib/memory/__stack_pointer
       i32.const 0
       i32.const 0
       i32.const 0
       call $assembly/generated/bench/Test.Inner#constructor
       local.tee $3
       i32.store
       loop $while-continue|01
        local.get $2
        local.get $0
        i32.load
        i32.gt_u
        if
         block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual2
          local.get $0
          i32.const 8
          i32.sub
          i32.load
          i32.const 9
          i32.eq
          if
           local.get $0
           call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
           local.set $1
           br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual2
          end
          unreachable
         end
         block $case3|13
          block $case2|14
           block $case1|15
            block $case0|16
             local.get $1
             i32.const 3
             i32.shr_u
             i32.const 1
             i32.sub
             br_table $case0|16 $case1|15 $case2|14 $case3|13
            end
            block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual3
             local.get $0
             i32.const 8
             i32.sub
             i32.load
             i32.const 9
             i32.eq
             if
              local.get $0
              call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
              local.set $1
              br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual3
             end
             unreachable
            end
            local.get $3
            local.get $1
            i32.store
            br $while-continue|01
           end
           block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual4
            local.get $0
            i32.const 8
            i32.sub
            i32.load
            i32.const 9
            i32.eq
            if
             local.get $0
             call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
             local.set $1
             br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual4
            end
            unreachable
           end
           local.get $1
           i32.const 0
           i32.lt_s
           if (result i32)
            local.get $0
            i32.load offset=4
           else
            local.get $1
            local.get $0
            i32.load
            i32.add
           end
           local.set $1
           i64.const 0
           i32.const 0
           call $assembly/generated/bench/Test.Inner.InnerInner#constructor
           local.set $9
           loop $while-continue|05
            local.get $1
            local.get $0
            i32.load
            i32.gt_u
            if
             block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual5
              local.get $0
              i32.const 8
              i32.sub
              i32.load
              i32.const 9
              i32.eq
              if
               local.get $0
               call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
               local.set $10
               br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual5
              end
              unreachable
             end
             block $case3|17
              block $case2|18
               block $case1|19
                block $case0|110
                 local.get $10
                 i32.const 3
                 i32.shr_u
                 i32.const 1
                 i32.sub
                 br_table $case0|110 $case1|19 $case2|18 $case3|17
                end
                block $__inlined_func$~lib/as-proto/Reader/Reader#int64@virtual
                 local.get $0
                 i32.const 8
                 i32.sub
                 i32.load
                 i32.const 9
                 i32.eq
                 if
                  local.get $0
                  call $~lib/as-proto/internal/FixedReader/FixedReader#varint64
                  local.set $6
                  br $__inlined_func$~lib/as-proto/Reader/Reader#int64@virtual
                 end
                 unreachable
                end
                local.get $9
                local.get $6
                i64.store
                br $while-continue|05
               end
               block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual6
                local.get $0
                i32.const 8
                i32.sub
                i32.load
                i32.const 9
                i32.eq
                if
                 local.get $0
                 call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
                 local.set $10
                 br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual6
                end
                unreachable
               end
               local.get $9
               local.get $10
               i32.store offset=8
               br $while-continue|05
              end
              block $__inlined_func$~lib/as-proto/Reader/Reader#sint32@virtual
               local.get $0
               i32.const 8
               i32.sub
               i32.load
               i32.const 9
               i32.eq
               if
                i32.const 0
                local.get $0
                call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
                local.tee $10
                i32.const 1
                i32.and
                i32.sub
                local.get $10
                i32.const 1
                i32.shr_u
                i32.xor
                local.set $10
                br $__inlined_func$~lib/as-proto/Reader/Reader#sint32@virtual
               end
               unreachable
              end
              local.get $9
              local.get $10
              i32.store offset=12
              br $while-continue|05
             end
             local.get $0
             local.get $10
             i32.const 7
             i32.and
             call $~lib/as-proto/Reader/Reader#skipType@virtual
             br $while-continue|05
            end
           end
           local.get $3
           local.get $9
           i32.store offset=4
           br $while-continue|01
          end
          block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual7
           local.get $0
           i32.const 8
           i32.sub
           i32.load
           i32.const 9
           i32.eq
           if
            local.get $0
            call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
            local.set $1
            br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual7
           end
           unreachable
          end
          global.get $~lib/memory/__stack_pointer
          i32.const 8
          i32.sub
          global.set $~lib/memory/__stack_pointer
          global.get $~lib/memory/__stack_pointer
          i32.const 4172
          i32.lt_s
          br_if $folding-inner1
          global.get $~lib/memory/__stack_pointer
          i64.const 0
          i64.store
          local.get $1
          i32.const 0
          i32.lt_s
          if (result i32)
           local.get $0
           i32.load offset=4
          else
           local.get $1
           local.get $0
           i32.load
           i32.add
          end
          local.set $1
          i32.const 0
          local.set $9
          i32.const 0
          global.set $~argumentsLength
          global.get $~lib/memory/__stack_pointer
          local.tee $10
          i32.const 4
          i32.sub
          global.set $~lib/memory/__stack_pointer
          global.get $~lib/memory/__stack_pointer
          i32.const 4172
          i32.lt_s
          br_if $folding-inner1
          global.get $~lib/memory/__stack_pointer
          i32.const 0
          i32.store
          block $2of2
           block $0of2
            block $outOfRange
             global.get $~argumentsLength
             br_table $0of2 $2of2 $2of2 $outOfRange
            end
            unreachable
           end
           global.get $~lib/memory/__stack_pointer
           i32.const 0
           i32.const 0
           i32.const 14
           i32.const 1888
           call $~lib/rt/__newArray
           local.tee $9
           i32.store
          end
          local.get $9
          f64.const 0
          call $assembly/generated/bench/Outer#constructor
          local.set $9
          global.get $~lib/memory/__stack_pointer
          i32.const 4
          i32.add
          global.set $~lib/memory/__stack_pointer
          local.get $10
          local.get $9
          i32.store
          loop $while-continue|02
           local.get $1
           local.get $0
           i32.load
           i32.gt_u
           if
            block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual8
             local.get $0
             i32.const 8
             i32.sub
             i32.load
             i32.const 9
             i32.eq
             if
              local.get $0
              call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
              local.set $10
              br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual8
             end
             unreachable
            end
            block $case2|13
             block $case1|14
              local.get $10
              i32.const 3
              i32.shr_u
              local.tee $11
              i32.const 1
              i32.ne
              if
               local.get $11
               i32.const 2
               i32.eq
               br_if $case1|14
               br $case2|13
              end
              local.get $10
              i32.const 7
              i32.and
              i32.const 2
              i32.eq
              if
               local.get $0
               i32.load
               block $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual9
                local.get $0
                i32.const 8
                i32.sub
                i32.load
                i32.const 9
                i32.eq
                if
                 local.get $0
                 call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
                 local.set $11
                 br $__inlined_func$~lib/as-proto/Reader/Reader#uint32@virtual9
                end
                unreachable
               end
               local.get $11
               i32.add
               local.set $10
               loop $while-continue|2
                local.get $10
                local.get $0
                i32.load
                i32.gt_u
                if
                 global.get $~lib/memory/__stack_pointer
                 local.get $9
                 i32.load
                 local.tee $11
                 i32.store offset=4
                 local.get $11
                 local.get $0
                 call $~lib/as-proto/Reader/Reader#bool@virtual
                 call $~lib/array/Array<bool>#push
                 br $while-continue|2
                end
               end
              else
               global.get $~lib/memory/__stack_pointer
               local.get $9
               i32.load
               local.tee $10
               i32.store offset=4
               local.get $10
               local.get $0
               call $~lib/as-proto/Reader/Reader#bool@virtual
               call $~lib/array/Array<bool>#push
              end
              br $while-continue|02
             end
             block $__inlined_func$~lib/as-proto/Reader/Reader#double@virtual
              local.get $0
              i32.const 8
              i32.sub
              i32.load
              i32.const 9
              i32.eq
              if
               local.get $0
               local.get $0
               i32.load
               local.tee $10
               i32.const 8
               i32.add
               i32.store
               local.get $0
               i32.load
               local.get $0
               i32.load offset=4
               i32.le_u
               drop
               local.get $10
               f64.load
               local.set $5
               br $__inlined_func$~lib/as-proto/Reader/Reader#double@virtual
              end
              unreachable
             end
             local.get $9
             local.get $5
             f64.store offset=8
             br $while-continue|02
            end
            local.get $0
            local.get $10
            i32.const 7
            i32.and
            call $~lib/as-proto/Reader/Reader#skipType@virtual
            br $while-continue|02
           end
          end
          global.get $~lib/memory/__stack_pointer
          i32.const 8
          i32.add
          global.set $~lib/memory/__stack_pointer
          local.get $3
          local.get $9
          i32.store offset=8
          local.get $9
          if
           local.get $3
           local.get $9
           call $byn-split-outlined-A$~lib/rt/itcms/__link
          end
          br $while-continue|01
         end
         local.get $0
         local.get $1
         i32.const 7
         i32.and
         call $~lib/as-proto/Reader/Reader#skipType@virtual
         br $while-continue|01
        end
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.add
       global.set $~lib/memory/__stack_pointer
       local.get $8
       local.get $3
       i32.store offset=8
       local.get $3
       if
        local.get $8
        local.get $3
        call $byn-split-outlined-A$~lib/rt/itcms/__link
       end
       br $while-continue|0
      end
      block $__inlined_func$~lib/as-proto/Reader/Reader#float@virtual
       local.get $0
       i32.const 8
       i32.sub
       i32.load
       i32.const 9
       i32.eq
       if
        local.get $0
        local.get $0
        i32.load
        local.tee $1
        i32.const 4
        i32.add
        i32.store
        local.get $0
        i32.load
        local.get $0
        i32.load offset=4
        i32.le_u
        drop
        local.get $1
        f32.load
        local.set $4
        br $__inlined_func$~lib/as-proto/Reader/Reader#float@virtual
       end
       unreachable
      end
      local.get $8
      local.get $4
      f32.store offset=12
      br $while-continue|0
     end
     local.get $0
     local.get $1
     i32.const 7
     i32.and
     call $~lib/as-proto/Reader/Reader#skipType@virtual
     br $while-continue|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $8
   return
  end
  i32.const 20576
  i32.const 20624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/as-proto/Protobuf/Protobuf.decode<assembly/generated/bench/Test> (param $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i32.const 0
  i32.store
  local.get $1
  global.get $~lib/as-proto/Protobuf/READER
  local.tee $1
  i32.store
  local.get $1
  local.get $0
  i32.load offset=4
  i32.store
  local.get $1
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=8
  i32.add
  i32.store offset=4
  local.get $1
  local.get $0
  i32.store offset=8
  local.get $0
  if
   local.get $1
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/as-proto/Protobuf/READER
  local.tee $0
  i32.store
  i32.const 2
  global.set $~argumentsLength
  local.get $0
  i32.const -1
  i32.const 1920
  i32.load
  call_indirect $0 (type $i32_i32_=>_i32)
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/static_aspr/decode
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i64.const 0
  i64.store
  local.get $0
  global.get $assembly/static_aspr/testEncoded
  local.tee $1
  i32.store
  local.get $0
  i32.const 1920
  i32.store offset=4
  local.get $1
  call $~lib/as-proto/Protobuf/Protobuf.decode<assembly/generated/bench/Test>
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/static_aspr/encodeDecode
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i64.const 0
  i64.store
  local.get $0
  i64.const 0
  i64.store offset=8
  local.get $0
  global.get $assembly/static_aspr/testDecoded
  local.tee $1
  i32.store offset=8
  local.get $0
  i32.const 1824
  i32.store offset=12
  local.get $1
  call $~lib/as-proto/Protobuf/Protobuf.encode<assembly/generated/bench/Test>
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 1920
  i32.store offset=4
  local.get $0
  call $~lib/as-proto/Protobuf/Protobuf.decode<assembly/generated/bench/Test>
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/as-proto/internal/FixedReader/FixedReader#skipType (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   block $break|0
    block $case5|0
     block $case4|0
      block $case3|0
       block $case2|0
        block $case1|0
         block $case0|0
          local.get $1
          br_table $case0|0 $case1|0 $case2|0 $case3|0 $case5|0 $case4|0 $case5|0
         end
         loop $while-continue|0
          local.get $0
          local.get $0
          i32.load
          local.tee $1
          i32.const 1
          i32.add
          i32.store
          local.get $0
          i32.load
          local.get $0
          i32.load offset=4
          i32.le_u
          drop
          local.get $1
          i32.load8_u
          i32.const 128
          i32.and
          br_if $while-continue|0
         end
         br $break|0
        end
        local.get $0
        local.get $0
        i32.load
        i32.const 8
        i32.add
        i32.store
        local.get $0
        i32.load
        local.get $0
        i32.load offset=4
        i32.le_u
        drop
        br $break|0
       end
       local.get $0
       call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
       local.tee $1
       if
        local.get $0
        local.get $1
        local.get $0
        i32.load
        i32.add
        i32.store
        local.get $0
        i32.load
        local.get $0
        i32.load offset=4
        i32.le_u
        drop
       else
        loop $while-continue|03
         local.get $0
         local.get $0
         i32.load
         local.tee $1
         i32.const 1
         i32.add
         i32.store
         local.get $0
         i32.load
         local.get $0
         i32.load offset=4
         i32.le_u
         drop
         local.get $1
         i32.load8_u
         i32.const 128
         i32.and
         br_if $while-continue|03
        end
       end
       br $break|0
      end
      loop $while-continue|1
       local.get $0
       call $~lib/as-proto/internal/FixedReader/FixedReader#varint32
       i32.const 7
       i32.and
       local.tee $1
       i32.const 4
       i32.ne
       if
        local.get $0
        local.get $1
        call $~lib/as-proto/internal/FixedReader/FixedReader#skipType
        br $while-continue|1
       end
      end
      br $break|0
     end
     local.get $0
     local.get $0
     i32.load
     i32.const 4
     i32.add
     i32.store
     local.get $0
     i32.load
     local.get $0
     i32.load offset=4
     i32.le_u
     drop
     br $break|0
    end
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    i32.const 2112
    i32.store
    local.get $0
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4172
    i32.lt_s
    br_if $folding-inner1
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store
    block $__inlined_func$~lib/util/number/itoa32
     local.get $1
     i32.eqz
     if
      global.get $~lib/memory/__stack_pointer
      i32.const 4
      i32.add
      global.set $~lib/memory/__stack_pointer
      i32.const 2368
      local.set $1
      br $__inlined_func$~lib/util/number/itoa32
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 0
     local.get $1
     i32.sub
     local.get $1
     local.get $1
     i32.const 31
     i32.shr_u
     local.tee $4
     select
     local.tee $0
     i32.const 100000
     i32.lt_u
     if (result i32)
      local.get $0
      i32.const 100
      i32.lt_u
      if (result i32)
       local.get $0
       i32.const 10
       i32.ge_u
       i32.const 1
       i32.add
      else
       local.get $0
       i32.const 10000
       i32.ge_u
       i32.const 3
       i32.add
       local.get $0
       i32.const 1000
       i32.ge_u
       i32.add
      end
     else
      local.get $0
      i32.const 10000000
      i32.lt_u
      if (result i32)
       local.get $0
       i32.const 1000000
       i32.ge_u
       i32.const 6
       i32.add
      else
       local.get $0
       i32.const 1000000000
       i32.ge_u
       i32.const 8
       i32.add
       local.get $0
       i32.const 100000000
       i32.ge_u
       i32.add
      end
     end
     local.get $4
     i32.add
     local.tee $2
     i32.const 1
     i32.shl
     i32.const 1
     call $~lib/rt/itcms/__new
     local.tee $1
     i32.store
     loop $while-continue|00
      local.get $0
      i32.const 10000
      i32.ge_u
      if
       local.get $0
       i32.const 10000
       i32.rem_u
       local.set $3
       local.get $0
       i32.const 10000
       i32.div_u
       local.set $0
       local.get $2
       i32.const 4
       i32.sub
       local.tee $2
       i32.const 1
       i32.shl
       local.get $1
       i32.add
       local.get $3
       i32.const 100
       i32.div_u
       i32.const 2
       i32.shl
       i32.const 2380
       i32.add
       i64.load32_u
       local.get $3
       i32.const 100
       i32.rem_u
       i32.const 2
       i32.shl
       i32.const 2380
       i32.add
       i64.load32_u
       i64.const 32
       i64.shl
       i64.or
       i64.store
       br $while-continue|00
      end
     end
     local.get $0
     i32.const 100
     i32.ge_u
     if
      local.get $2
      i32.const 2
      i32.sub
      local.tee $2
      i32.const 1
      i32.shl
      local.get $1
      i32.add
      local.get $0
      i32.const 100
      i32.rem_u
      i32.const 2
      i32.shl
      i32.const 2380
      i32.add
      i32.load
      i32.store
      local.get $0
      i32.const 100
      i32.div_u
      local.set $0
     end
     local.get $0
     i32.const 10
     i32.ge_u
     if
      local.get $2
      i32.const 2
      i32.sub
      i32.const 1
      i32.shl
      local.get $1
      i32.add
      local.get $0
      i32.const 2
      i32.shl
      i32.const 2380
      i32.add
      i32.load
      i32.store
     else
      local.get $2
      i32.const 1
      i32.sub
      i32.const 1
      i32.shl
      local.get $1
      i32.add
      local.get $0
      i32.const 48
      i32.add
      i32.store16
     end
     local.get $4
     if
      local.get $1
      i32.const 45
      i32.store16
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
    end
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    local.get $1
    i32.store offset=4
    local.get $0
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 4172
    i32.lt_s
    br_if $folding-inner1
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store
    block $__inlined_func$~lib/string/String#concat
     i32.const 2108
     i32.load
     i32.const 1
     i32.shr_u
     i32.const 1
     i32.shl
     local.tee $2
     local.get $1
     i32.const 20
     i32.sub
     i32.load offset=16
     i32.const 1
     i32.shr_u
     i32.const 1
     i32.shl
     local.tee $3
     i32.add
     local.tee $0
     i32.eqz
     if
      global.get $~lib/memory/__stack_pointer
      i32.const 4
      i32.add
      global.set $~lib/memory/__stack_pointer
      i32.const 1856
      local.set $0
      br $__inlined_func$~lib/string/String#concat
     end
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.const 1
     call $~lib/rt/itcms/__new
     local.tee $0
     i32.store
     local.get $0
     i32.const 2112
     local.get $2
     call $~lib/memory/memory.copy
     local.get $0
     local.get $2
     i32.add
     local.get $1
     local.get $3
     call $~lib/memory/memory.copy
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
    end
    local.get $0
    i32.const 3952
    i32.const 131
    i32.const 9
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 20576
  i32.const 20624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/as-proto/Writer/Writer#constructor (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 4
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $4
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.shl
  local.tee $1
  i32.const 0
  call $~lib/rt/itcms/__new
  local.set $5
  local.get $3
  if
   local.get $5
   local.get $3
   local.get $1
   call $~lib/memory/memory.copy
  end
  local.get $4
  local.get $5
  i32.store
  i32.const 16
  local.get $2
  call $~lib/rt/itcms/__new
  local.tee $2
  local.get $5
  i32.store
  local.get $5
  if
   local.get $2
   local.get $5
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  local.get $2
  local.get $5
  i32.store offset=4
  local.get $2
  local.get $1
  i32.store offset=8
  local.get $2
  local.get $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/typedarray/Uint8Array#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 12
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4172
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   local.get $1
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.const 2
    call $~lib/rt/itcms/__new
    local.tee $1
    i32.store
   end
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $0
   i32.const 1073741820
   i32.gt_u
   if
    i32.const 1552
    i32.const 1600
    i32.const 19
    i32.const 57
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store offset=4
   local.get $1
   local.get $2
   i32.store
   local.get $2
   if
    local.get $1
    local.get $2
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   local.get $1
   local.get $2
   i32.store offset=4
   local.get $1
   local.get $0
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   local.get $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   return
  end
  i32.const 20576
  i32.const 20624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/generated/bench/Test#constructor (param $0 i32) (param $1 i32) (param $2 i32) (param $3 f32) (result i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $4
  i32.const 0
  i32.store
  local.get $4
  i32.const 16
  i32.const 11
  call $~lib/rt/itcms/__new
  local.tee $4
  i32.store
  local.get $4
  i32.const 0
  i32.store
  local.get $4
  i32.const 0
  i32.store offset=4
  local.get $4
  i32.const 0
  i32.store offset=8
  local.get $4
  f32.const 0
  f32.store offset=12
  local.get $4
  local.get $0
  i32.store
  local.get $0
  if
   local.get $4
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  local.get $4
  local.get $1
  i32.store offset=4
  local.get $4
  local.get $2
  i32.store offset=8
  local.get $2
  if
   local.get $4
   local.get $2
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  local.get $4
  local.get $3
  f32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $assembly/generated/bench/Test.Inner#constructor (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 0
  i32.store
  local.get $3
  i32.const 12
  i32.const 12
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store
  local.get $3
  i32.const 0
  i32.store
  local.get $3
  i32.const 0
  i32.store offset=4
  local.get $3
  i32.const 0
  i32.store offset=8
  local.get $3
  local.get $0
  i32.store
  local.get $3
  local.get $1
  i32.store offset=4
  local.get $3
  local.get $2
  i32.store offset=8
  local.get $2
  if
   local.get $3
   local.get $2
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $assembly/generated/bench/Outer#constructor (param $0 i32) (param $1 f64) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4172
  i32.lt_s
  if
   i32.const 20576
   i32.const 20624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i32.const 0
  i32.store
  local.get $2
  i32.const 16
  i32.const 13
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  i32.const 0
  i32.store
  local.get $2
  f64.const 0
  f64.store offset=8
  local.get $2
  local.get $0
  i32.store
  local.get $0
  if
   local.get $2
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  local.get $2
  local.get $1
  f64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $byn-split-outlined-A$~lib/rt/itcms/__visit (param $0 i32)
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $byn-split-outlined-A$~lib/rt/itcms/__link (param $0 i32) (param $1 i32)
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=4
   i32.const 3
   i32.and
   local.tee $0
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $1
    call $~lib/rt/itcms/Object#makeGray
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    local.get $0
    i32.const 3
    i32.eq
    i32.and
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
)
