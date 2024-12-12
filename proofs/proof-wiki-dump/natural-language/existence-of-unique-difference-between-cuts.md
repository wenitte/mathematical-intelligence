# 

Source: https://proofwiki.org/wiki/Existence_of_Unique_Difference_between_Cuts



Theorem
Let $\alpha$ and $\beta$ be cuts.

Then there exists exactly one cut $\gamma$ such that:

$\alpha + \gamma = \beta$


Proof
From Ordering on Cuts is Compatible with Addition of Cuts:

$\gamma_1 \ne \gamma_2 \implies \alpha + \gamma_1 \ne \alpha + \gamma_2$
That demonstrates uniqueness.

Let:

$\gamma = \beta + \paren {-\alpha}$
where $-\alpha$ is the negative of $\alpha$.
Then by Identity Element for Addition of Cuts:














\(\ds \alpha + \gamma\)

\(=\)







\(\ds \alpha + \paren {\beta + \paren {-\alpha} }\)





Definition of $\gamma$














\(\ds \)

\(=\)







\(\ds \alpha + \paren {\paren {-\alpha} + \beta}\)





Addition of Cuts is Commutative














\(\ds \)

\(=\)







\(\ds \paren {\alpha + \paren {-\alpha} } + \beta\)





Addition of Cuts is Associative














\(\ds \)

\(=\)







\(\ds 0^* + \beta\)





Existence of Unique Inverse Element for Addition of Cuts














\(\ds \)

\(=\)







\(\ds \beta\)





Identity Element for Addition of Cuts



The result follows.
$\blacksquare$


Also see
Definition:Subtraction of Cuts: $\gamma$ is defined as $\beta - \alpha$, the difference between $\beta$ and $\alpha$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.19$. Theorem




