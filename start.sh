#starting kirex
echo starting user
pm2 start kirex-user
cd ..
echo starting admin
pm2 start kirex-admin
echo started all services
