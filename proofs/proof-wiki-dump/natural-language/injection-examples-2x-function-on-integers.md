# 

Source: https://proofwiki.org/wiki/Injection/Examples/2x_Function_on_Integers

Example of Injection which is Not a Surjection
Let $f: \Z \to \Z$ be the mapping defined on the set of integers as:

$\forall x \in \Z: \map f x = 2 x$
Then $f$ is an injection, but not a surjection.


Proof
Let $x_1$ and $x_2$ be integers.
Then:














\(\ds \map f {x_1}\)

\(=\)







\(\ds \map f {x_2}\)





by supposition








\(\ds \leadsto \ \ \)





\(\ds 2 x_1\)

\(=\)







\(\ds 2 x_2\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds x_2\)









Hence $f$ is an injection by definition.
$\Box$

Now consider $y = 2 n + 1$ for some $n \in \Z$.
There exists no $x \in \Z$ such that $\map f x = y$.
Thus by definition $f$ is not a surjection.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $8$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions: Problem Set $\text{A}.4$: $23$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $5$




