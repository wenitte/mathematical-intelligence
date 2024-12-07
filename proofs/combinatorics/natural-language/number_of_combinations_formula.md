This proof can be described as follows in plain English:

The multiplication principle states that if there are two tasks in sequence, with the first task allowing k ways to be executed and the second task allowing n ways, then there would be a total of k times n ways to perform both tasks. 

Then, introducing permutation (denoted as P(n,r)), it defines the ways to arrange r elements from n. This is a two-step process consisting firstly of selecting r elements from n, denoted as C(n,r) ways, followed by arranging those r elements in r! (r factorial) ways. Therefore, the permutation P(n,r) can be explained as the product of C(n,r) and r!.

To observe the arrangement of r elements, start by considering r choices for the first position. After the first choice, there are (r-1) choices for the second position, and (r-2) choices for the third position, and so forth until there is just 1 choice for the final position. Multiplying all these choices together will give r factorial (r!), following the concept of the multiplication principle.

Now, let's consider a known formula for permutation: P(n,r) equals n factorial divided by the difference of n and r factorial (n!/(n-r)!). By replacing the left-hand side of the equation with the products of C(n,r) and r! (from our earlier established relationship), the formula becomes: n!/(n-r)! equals C(n,r) times r!.

Solving for C(n,r) in the permutation formula gives us the formula for combinations: C(n,r) equals n factorial divided by the product of r factorial and the difference of n and r factorial (n!/(r!(n-r)!)).

Therefore, this proof confirms the calculation of permutations using concepts of combinations and multiplication principle.