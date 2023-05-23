public static int minimumPlanes(int[] array) {
        int n = array.length;
        Integer[] ans = new Integer[n];
        ans[n - 1] = 0;
        ans[n - 2] = array[n - 2] > 0 ? 1 : null;
        
        for( int i = n - 3 ; i >= 0 ; i-- ){
            
            int fuel = array[i];
            int minPlanes = Integer.MAX_VALUE;
            if( i + fuel >= n - 1 ){ 
                ans[i] = 1;
                continue;
            }else if( fuel == 0 ){
                ans[i] = -1;
                continue;
            }
              
            for( int j = i + 1 ; j <= i + fuel && j < array.length ; j++ ){
                if( ans[j] != null && ans[j] != -1 )
                    minPlanes = Math.min( ans[j] , minPlanes );
            }
            
            if( minPlanes != Integer.MAX_VALUE )
                ans[i] = minPlanes + 1;
            else
                ans[i] = -1;
        }
        
        return ans[0];
    }