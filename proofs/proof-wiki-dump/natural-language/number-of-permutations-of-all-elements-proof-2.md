# 

Source: https://proofwiki.org/wiki/Number_of_Permutations_of_All_Elements/Proof_2

Theorem
Let $S$ be a set of $n$ elements.

The number of permutations of $S$ is $n!$


Proof
We pick the elements of $S$ in an arbitrary order.
There are $n$ elements of $S$, so there are $n$ options for the first element.
Then there are $n - 1$ elements left in $S$ that we have not picked, so there are $n - 1$ options for the second element.
Then there are $n - 2$ elements left, so there are $n - 2$ options for the third element.
And so on, until there are $3$, then $2$, then $1$ remaining elements.
Each mapping is independent of the choices made for all the other mappings.
So, by the Product Rule for Counting, the total number of ordered selections from $S$:














\(\ds {}^n P_n\)

\(=\)







\(\ds n \paren {n - 1} \paren {n - 2} \cdots 3 \times 2 \times 1\)




















\(\ds \)

\(=\)







\(\ds n!\)





Definition of Factorial



$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.6$. Products of bijective mappings. Permutations: Example $54$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.6$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory




