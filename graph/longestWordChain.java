import java.util.*;

public class graphapproach {
    static ArrayList<ArrayList<Integer>> all = new ArrayList<>();
    static ArrayList<ArrayList<Integer>> achainlist = new ArrayList<>();
    static int max=0;
    static void dfs(int i,int n){
        ArrayList<Integer> achain = new ArrayList<>();
        boolean visited[] = new boolean[n];
        achain.add(i);
        
        dfs2(i,visited,achain);

    }
    static void dfs2(int i,boolean[] visited,ArrayList<Integer> achain){

        visited[i]=true;
        boolean loopstate=false;
       
        for(int j=0;j<all.get(i).size();j++){
            
            int av=all.get(i).get(j);
            if(!visited[av]){
                loopstate=true;
            
                achain.add(av);
                
                dfs2(av,visited,achain);

            }
           
            
            
        }
        if(!loopstate){
            
          
            max=max<achain.size()?achain.size():max;
            ArrayList<Integer> d = new ArrayList<>(achain);
            achainlist.add(d);
            
            
        }
        if(achain.size()>0){
            achain.remove(achain.size()-1);
        }
           
        
    }
    public static void main(String[] args){
        Scanner sc =  new Scanner(System.in);
        int n = sc.nextInt();
        String arr[]=new String[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.next();

        }
        
        all=connect(arr,n);
        
        for(int i=0;i<n;i++){
          dfs(i,n);
        }
        //displaying connections btw words
        // int c=0;
        // for(ArrayList<Integer>a:all){
        //     System.out.println(c+":" +a);
        //     c++;
        // }

        System.out.println("after");
        for(ArrayList<Integer> a:achainlist){
            if(a.size()==max){
                for(int x=0;x<a.size();x++){
                    System.out.print(arr[a.get(x)]+" ");
                }
                System.out.println();

            }
          
        }
        
        
     
    }
    static ArrayList<ArrayList<Integer>> connect(String[] arr,int n){
         ArrayList<ArrayList<Integer>> all = new ArrayList<>();
         for(int i=0;i<n;i++){
            ArrayList<Integer> al = new ArrayList<>();

            char c= arr[i].charAt(arr[i].length()-1);
            for(int j=0;j<n;j++){
                if(i!=j){
                    if(c==arr[j].charAt(0)){
                        al.add(j);
                    }
                }

            }
            all.add(al);
         }
    
        return all;
    }
   
}