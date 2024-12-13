# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem/Proof_1

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.

Then:

$\exists \xi \in \openint a b: \map {f'} \xi = \dfrac {\map f b - \map f a} {b - a}$


Proof
For any constant $h \in \R$ we may construct the real function defined on $\closedint a b$ by:

$\map F x = \map f x + h x$
We have that $h x$ is continuous on $\closedint a b$ from Linear Function is Continuous.
From the Sum Rule for Continuous Real Functions, $F$ is continuous on $\closedint a b$ and differentiable on $\openint a b$.
Let us calculate what the constant $h$ has to be such that $\map F a = \map F b$:














\(\ds \map F a\)

\(=\)







\(\ds \map F b\)














\(\ds \leadsto \ \ \)





\(\ds \map f a + h a\)

\(=\)







\(\ds \map f b + h b\)














\(\ds \leadsto \ \ \)





\(\ds \map f a - \map f b\)

\(=\)







\(\ds h b - h a\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \map f a - \map f b\)

\(=\)







\(\ds h \paren {b - a}\)





Real Multiplication Distributes over Real Addition








\(\ds \leadsto \ \ \)





\(\ds h\)

\(=\)







\(\ds -\dfrac {\map f b - \map f a} {b - a}\)





rearranging




Since $F$ satisfies the conditions for the application of Rolle's Theorem:

$\exists \xi \in \openint a b: \map {F'} \xi = 0$
But then:

$\map {F'} \xi = \map {f'} \xi + h = 0$
The result follows.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.4$ Law of the Mean
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 11.6$




