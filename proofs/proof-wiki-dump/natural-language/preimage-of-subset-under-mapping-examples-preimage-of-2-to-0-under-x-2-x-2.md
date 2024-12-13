# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_under_Mapping/Examples/Preimage_of_-2_to_0_under_x%5E2-x-2

Example of Preimage of Subset under Mapping
Let $f: \R \to \R$ be the mapping defined as:

$\forall x \in \R: \map f x = x^2 - x - 2$
The preimage of the closed interval $\closedint {-2} 0$ is:

$f^{-1} \closedint {-2} 0 = \closedint {-1} 0 \cup \closedint 1 2$


Proof
Trivially, by differentiating $x^2 - x - 2$ with respect to $x$:

$f' = 2 x - 1$
and equating $f'$ to $0$, the minimum of $\Img f$ is seen to occur at $\map f {\dfrac 1 2} = -\dfrac 9 4$.
We see that $\closedint {-2} 0$ is well within the codomain of $f$.
Hence we should be able to solve for $\map f x = -2$ and $\map f x = 0$ and get two values for each.
So:














\(\ds \map f x\)

\(=\)







\(\ds -2\)














\(\ds \leadsto \ \ \)





\(\ds x^2 - x - 2\)

\(=\)







\(\ds -2\)














\(\ds \leadsto \ \ \)





\(\ds x^2 - x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x \paren {x - 1}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds 0 \text { or } x = 1\)










Then:














\(\ds \map f x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x^2 - x - 2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x - 2} \paren {x + 1}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds 2 \text { or } x = -1\)









The result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions




