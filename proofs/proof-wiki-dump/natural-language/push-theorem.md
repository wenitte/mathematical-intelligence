# 

Source: https://proofwiki.org/wiki/Push_Theorem



Theorem
Let $f$ be a real function which is continuous on the open interval $\openint a \to$, $a \in \R$, such that:

$\ds \lim_{x \mathop \to +\infty} \map f x = +\infty$
Let $g$ be a real function defined on some open interval $\openint b \to$ such that, for sufficiently large $x$:

$\map g x > \map f x$

Then:

$\ds \lim_{x \mathop \to +\infty} \map g x = +\infty$


Proof
Let $\ds \lim_{x \mathop \to +\infty} \map f x = +\infty$.
By the definition of infinite limit at infinity, this means:

$\forall M_1 \in \R_{>0}: \exists N_1 \in \R_{>0}: x > N_1 \implies \map f x > M_1$

Now, the assertion that $\map g x \to +\infty$ is:

$\forall M_1 \in \R_{>0}: \exists N_2 \in \R_{>0}: x > N_2 \implies \map g x > M_1$

By the premise that $\map g x > \map f x$ for sufficiently large $x$, there is an $N$ such that:

$x > N \implies \map g x > \map f x$
Now, given $M_1$, let $N_2$ be greater than both $N_1$ and $N$.
Then since $N_2 > N$ and $N_2 > N_1$ respectively:

$\map g x > \map f x > M_1$
whence:

$\ds \lim_{x \mathop \to +\infty} \map g x = +\infty$
$\blacksquare$


Note on Terminology
The author of this page has not found a name for this theorem in any English source.
Push Theorem is the translation of  the Dutch name of this theorem: Duwstelling.


Also see
Comparison Test for Divergence




