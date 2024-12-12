# 

Source: https://proofwiki.org/wiki/Expression_for_Set_of_Points_at_which_Sequence_of_Functions_does_not_Converge_to_Given_Function

Theorem
Let $X$ be a set. 
Let $f : X \to \R$ be a real function.
For each $n \in \N$, let $f_n : X \to \R$ be a real function.

Then we have: 

$\ds \set {x \in X : \sequence {\map {f_n} x}_{n \in \N} \text { does not converge to } \map f x} = \bigcup_{k \mathop = 1}^\infty \bigcap_{N \mathop = 1}^\infty \bigcup_{n \mathop = N}^\infty \set {x \in X : \size {\map {f_n} x - \map f x} \ge \frac 1 k}$


Proof
It helps to rewrite:














\(\ds \bigcup_{k \mathop = 1}^\infty \bigcap_{N \mathop = 1}^\infty \bigcup_{n \mathop = N}^\infty \set {x \in X : \size {\map {f_n} x - \map f x} \ge \frac 1 k}\)

\(=\)







\(\ds \bigcup_{k \mathop = 1}^\infty \bigcap_{N \mathop = 1}^\infty \set {x \in X : \size {\map {f_n} x - \map f x} \ge \frac 1 k \text { for some } k \ge n}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{k \mathop = 1}^\infty \set {x \in X : \text {for each } N \in \N \text { there exists } n \ge N \text { such that } \size {\map {f_n} x - \map f x} \ge \frac 1 k}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in X : \text {there exists some } k \in \N \text { such that for each } N \in \N \text { there exists } n \ge N \text { such that } \size {\map {f_n} x - \map f x} \ge \frac 1 k}\)









We have that $\sequence {\map {f_n} x}_{n \in \N}$ does not converge to $\map f x$ if and only if:

there exists a real number $\epsilon > 0$ such that for each $N \in \N$ there exists $n \ge N$ such that $\size {\map {f_n} x - \map f x} \ge \epsilon$
Clearly then, setting $\epsilon = 1/k$, if $x \in X$ is such that: 

there exists $k \in \N$ such that for each $N \in \N$ there exists $n \ge N$ such that $\size {\map {f_n} x - \map f x} \ge \dfrac 1 k$
we have that: 

$\sequence {\map {f_n} x}_{n \in \N}$ does not converge.
So:

$\ds \set {x \in X : \text {there exists some } k \in \N \text { such that for each } N \in \N \text { there exists } n \ge N \text { such that } \size {\map {f_n} x - \map f x} \ge \frac 1 k} \subseteq \set {x \in X : \sequence {\map {f_n} x}_{n \in \N} \text { does not converge to } \map f x}$

Now suppose that $x \in X$ is such that: 

there exists a real number $\epsilon > 0$ such that for each $N \in \N$ there exists $n \ge N$ such that $\size {\map {f_n} x - \map f x} \ge \epsilon$
Pick $k \in \N$ sufficiently large so that: 

$\epsilon \ge \dfrac 1 k$
Then we have that: 

there exists $k \in \N$ such that for each $N \in \N$ there exists $n \ge N$ such that $\size {\map {f_n} x - \map f x} \ge \dfrac 1 k$.
So:

$\ds \set {x \in X : \sequence {\map {f_n} x}_{n \in \N} \text { does not converge to } \map f x} \subseteq \set {x \in X : \text {there exists some } k \in \N \text { such that for each } N \in \N \text { there exists } n \ge N \text { such that } \size {\map {f_n} x - \map f x} \ge \frac 1 k}$
Then from the definition of set equality:

$\ds \set {x \in X : \sequence {\map {f_n} x}_{n \in \N} \text { does not converge to } \map f x} = \set {x \in X : \text {there exists some } k \in \N \text { such that for each } N \in \N \text { there exists } n \ge N \text { such that } \size {\map {f_n} x - \map f x} \ge \frac 1 k}$
That is:

$\ds \set {x \in X : \sequence {\map {f_n} x}_{n \in \N} \text { does not converge to } \map f x} = \bigcup_{k \mathop = 1}^\infty \bigcap_{N \mathop = 1}^\infty \bigcup_{n \mathop = N}^\infty \set {x \in X : \size {\map {f_n} x - \map f x} \ge \frac 1 k}$
$\blacksquare$





