# 

Source: https://proofwiki.org/wiki/Fixed_Points_of_Idempotent_Operator

Theorem
Let $X$ be a vector space.
Let $T : X \to X$ be an idempotent operator.

Then the set of fixed points of $T$ is precisely the range $\Rng T$. 


Proof
If $x$ is a fixed point of $T$, then:

$T x = x$
and we clearly have $x \in \Rng T$. 
Conversely, if $y \in \Rng T$ then there exists $x \in X$ such that $y = T x$. 
Then we have:














\(\ds T y\)

\(=\)







\(\ds T^2 x\)




















\(\ds \)

\(=\)







\(\ds T x\)





since $T^2 = T$














\(\ds \)

\(=\)







\(\ds y\)









So $y$ is a fixed point of $T$.
$\blacksquare$





