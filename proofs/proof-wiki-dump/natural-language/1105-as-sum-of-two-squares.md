# 

Source: https://proofwiki.org/wiki/1105_as_Sum_of_Two_Squares

Theorem
$1105$ can be expressed as the sum of two squares in more ways than any smaller integer:














\(\ds 1105\)

\(=\)

\(\, \ds 1089 + 16 \, \)

\(\, \ds = \, \)



\(\ds 33^2 + 4^2\)




















\(\ds \)

\(=\)

\(\, \ds 1024 + 81 \, \)

\(\, \ds = \, \)



\(\ds 32^2 + 9^2\)




















\(\ds \)

\(=\)

\(\, \ds 961 + 144 \, \)

\(\, \ds = \, \)



\(\ds 31^2 + 12^2\)




















\(\ds \)

\(=\)

\(\, \ds 625 + 529 \, \)

\(\, \ds = \, \)



\(\ds 24^2 + 23^2\)











Proof
Here is the source code of a program in Python that finds all positive integers up to $1105$ that can be written as a sum of two squares in more ways than any smaller positive integer:

   import numpy as np
   
   def two_sq_decomp_rich(n):
       
       bound = int(np.floor(np.sqrt(n)))
       count_of_two_sq_decomps = []
       for i in range(2*(bound + 1)*(bound + 1)):
           count_of_two_sq_decomps.append(0)
       for i in range(bound+1):        
           for j in range(i+1):
               count_of_two_sq_decomps[i*i+j*j] = count_of_two_sq_decomps[i*i+j*j] + 1
       
       max_sq_decomps = 0
       sq_decomp_rich_numbers = []
       for i in range(n+1):
           if count_of_two_sq_decomps[i] > max_sq_decomps:
               max_sq_decomps = count_of_two_sq_decomps[i]
               sq_decomp_rich_numbers.append(i)
               
       return sq_decomp_rich_numbers
       
   print(two_sq_decomp_rich(1105))

Output:

 [0, 25, 325, 1105]

Try it online!
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1105$
1994: Richard K. Guy: Unsolved Problems in Number Theory (2nd ed.)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1105$




