package me.anuragkush.constructors;

public class first {

    public static class Employee    {
         int id ;
        String name = "anurag";

        public int getId() {
            return id;
        }

        private void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        private void setName(String name) {
            this.name = name;
        }

        public void setName(String a,int b){
            setName(a);
            setId(b);
        }
        public  void employee(){
             int id= 1;
         }
    }


    public static void main(String[] args) {
        Employee obj =  new Employee();
        obj.setName("anurag",3);
        obj.getId();
        System.out.println(obj.getId());
        System.out.println(obj.getName());
    }
}
