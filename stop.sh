#stop kirex
echo stopping services
echo stopping user
fuser -n tcp -k 3000
echo stopping admin
fuser -n tcp -k 3001
echo all services stopped