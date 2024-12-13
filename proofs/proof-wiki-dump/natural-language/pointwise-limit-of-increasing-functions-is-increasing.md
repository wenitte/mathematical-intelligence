# 

Source: https://proofwiki.org/wiki/Pointwise_Limit_of_Increasing_Functions_is_Increasing

Theorem
Let $X \subseteq \R$.
Let $\sequence {f_n}$ be a sequence of real functions $X \to \R$ converging pointwise to a function $f : X \to \R$. 
Let $f_n$ be a increasing function for each $n$.

Then $f$ is increasing.


Proof
Suppose that $f$ is not increasing.
That is:

there exists $x, y \in X$ such that $x < y$ and $\map f x > \map f y$.
Let: 

$r = \map f x - \map f y > 0$
Since $\sequence {f_n}$ converges to $f$ converging pointwise, the sequence $\sequence {\map {f_n} x}$ converges to $\map f x$. 
That is, there exists $N_1 \in \N$ such that: 

$\size {\map {f_n} x - \map f x} < \dfrac r 3$
for $n > N_1$.
Similarly, $\sequence {\map {f_n} y}$ converges to $\map f y$.
That is, there exists $N_2 \in \N$ such that: 

$\size {\map {f_n} y - \map f y} < \dfrac r 3$
for $n > N_2$.
Take $n > \max \set {N_1, N_2}$.
Then, we have: 

$-\dfrac r 3 < \map {f_n} x - \map f x < \dfrac r 3$
and:

$-\dfrac r 3 < \map {f_n} y - \map f y < \dfrac r 3$
so that: 

$-\dfrac {2 r} 3 < \paren {\map {f_n} x - \map f x} - \paren {\map {f_n} y - \map f y} < \dfrac {2 r} 3$
Note that: 














\(\ds \paren {\map {f_n} x - \map f x} - \paren {\map {f_n} y - \map f y}\)

\(=\)







\(\ds \paren {\map {f_n} x - \map {f_n} y} - \paren {\map f x - \map f y}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map {f_n} x - \map {f_n} y} - r\)









Then, we have: 

$\map {f_n} x - \map {f_n} y > \dfrac r 3 > 0$
But $x < y$, so this contradicts that $f_n$ is increasing.
So $f$ is increasing.
$\blacksquare$





