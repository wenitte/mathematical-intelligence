# 

Source: https://proofwiki.org/wiki/Existence_of_Unique_Inverse_Element_for_Addition_of_Cuts



Theorem
Let $\alpha$ be a cut.
Let $0^*$ be the rational cut associated with the (rational) number $0$:

$0^* = \set {r \in \Q: r < 0}$

Then there exists a unique cut $\beta$ such that:

$\alpha + \beta = 0^*$
where $+$ denotes the operation of addition of cuts.


Proof
Proof of Uniqueness
Suppose $\alpha + \beta_1 = \alpha + \beta_2 = 0^*$.
We have:














\(\ds \beta_2\)

\(=\)







\(\ds 0^* + \beta_2\)





Identity Element for Addition of Cuts














\(\ds \)

\(=\)







\(\ds \paren {\alpha + \beta_1} + \beta_2\)





Definition of $\beta_1$














\(\ds \)

\(=\)







\(\ds \paren {\alpha + \beta_2} + \beta_1\)





Addition of Cuts is Commutative and Addition of Cuts is Associative














\(\ds \)

\(=\)







\(\ds 0^* + \beta_1\)





Definition of $\beta_2$














\(\ds \)

\(=\)







\(\ds \beta_1\)





Identity Element for Addition of Cuts



So if such a $\beta$ exists, it is indeed unique.
$\Box$


Proof of Existence
Let $\beta$ be the set of all rational numbers $p$ such that $-p$ is an upper number of $\alpha$, but not the smallest upper number, were it to exist.
We verify that the conditions are satisfied for $\beta$ to be a cut.
It follows directly from the definition that $\beta \ne \O$ and $\beta \ne \Q$.
Thus condition $(1)$ is satisfied.
$\Box$

Let $p \in \beta$.
Let $q \in \Q$ be a rational number such that $q < p$.
Then:

$-p \notin \alpha$
and:

$-q > -p$
Thus $-q$ is an upper number of $\alpha$, but not the smallest.
Thus $q \in \beta$.
Thus condition $(2)$ is satisfied.
$\Box$

Let $p \in \beta$.
Then by definition $-p$ is an upper number of $\alpha$, but not the smallest.
Thus there exists a rational number $q$ such that $-q < -p$ and such that $-q \notin \alpha$.
Let:

$r = \dfrac {p + q} 2$
By Mediant is Between:

$-q < -r < -p$
so $-r$ is also an upper number of $\alpha$, but not the smallest.
So we have found a rational number $r$ such that $r > p$ where $r \in \beta$.
Thus condition $(3)$ is satisfied.
$\Box$

We have demonstrated that $\beta$ is a cut.
We now verify that $\alpha + \beta = 0^*$.

Suppose $p \in \alpha + \beta$.
Then:

$p = q + r$
for some $q \in \alpha, r \in \beta$.
Hence:

$-r \notin \alpha$
$-r < q$
$q + r < 0$
and:

$p \in 0^*$

Suppose $p \in 0^*$.
Then:

$p < 0$
By Existence of Upper and Lower Numbers of Cut whose Difference equal Given Rational, there exist $q \in \alpha, r \notin \alpha$ such that:

$r$ is not the smallest upper number of $\alpha$
$r - q = -p$
Because $-r \in \beta$:














\(\ds p\)

\(=\)







\(\ds q - r\)




















\(\ds \)

\(=\)







\(\ds q + \paren {-r}\)




















\(\ds \)

\(\in\)







\(\ds \alpha + \beta\)










Thus by definition of set equality:

$\alpha + \beta = 0^*$
and the proof is complete.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.16$. Theorem




