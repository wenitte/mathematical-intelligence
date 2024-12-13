# 

Source: https://proofwiki.org/wiki/Number_of_Ways_of_Seating_People_at_Circular_Table



Theorem
Let there be $n$ people to be seated at a round table.
Let $N$ be the number of different ways to seat those $n$ people.
Note that if person $A$ is seated between person $B$ and person $C$, then having $B$ on the left and $C$ on the right is considered different from having $B$ on the right and $C$ on the left.

Then:

$N = \paren {n - 1}!$


Proof
From Number of Permutations of All Elements, the number of different ways of arranging $n$ people in line is $n!$.
However, a round table has no beginning and end.
Hence the vital factor is the arrangement relative to an arbitrary given person.
So we fix one person, and arrange the other $n - 1$ people relative to that person.
From Number of Permutations of All Elements, there are $\paren {n - 1}!$ ways to arrange those people. 
$\blacksquare$


Examples
$8$ People
$8$ people can be seated at a circular table in $5040$ ways.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: The number of ways of seating $n$ people at a circular table




