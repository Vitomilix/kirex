#stop kirex
echo stopping services
echo stopping user
pm2 stop kirex-user
echo stopping admin
pm2 stop kirex-admin
echo all services stopped