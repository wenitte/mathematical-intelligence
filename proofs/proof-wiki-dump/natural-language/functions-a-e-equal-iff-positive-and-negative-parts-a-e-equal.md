# 

Source: https://proofwiki.org/wiki/Functions_A.E._Equal_iff_Positive_and_Negative_Parts_A.E._Equal



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f, g : X \to \overline \R$ be extended real-valued functions. 

Then $f = g$ $\mu$-almost everywhere if and only if:

$f^+ = g^+$ $\mu$-almost everywhere and $f^- = g^-$ $\mu$-almost everywhere.
where: 

$f^+$ and $g^+$ denote the positive parts of $f$ and $g$ respectively
$f^-$ and $g^-$ denote the negative parts of $f$ and $g$ respectively.


Proof
Necessary Condition
Suppose that $f = g$ $\mu$-almost everywhere. 
Then there exists a $\mu$-null set $N \subseteq X$ such that: 

if $x \in X$ has $\map f x \ne \map g x$, then $x \in N$.
From the definition of the positive part, we have: 

$\map {f^+} x = \max \set {\map f x, 0}$
and:

$\map {g^+} x = \max \set {\map g x, 0}$
Clearly if $\map f x = \map g x$, we then have $\map {f^+} x = \map {g^+} x$. 
So from Proof by Contraposition, if $\map {f^+} x \ne \map {g^+} x$ for $x \in X$, we have that $\map f x \ne \map g x$.
That is, if $\map {f^+} x \ne \map {g^+} x$, we have $x \in N$, which is $\mu$-null set.
So:

$f^+ = g^+$ $\mu$-almost everywhere.
From the definition of the negative part, we have:

$\map {f^-} x = -\min \set {\map f x, 0}$
and:

$\map {g^-} x = -\min \set {\map g x, 0}$
As before, by contraposition, if $\map {f^-} x \ne \map {g^-} x$ for $x \in X$, we have that $\map f x \ne \map g x$.
So, if $\map {f^-} x \ne \map {g^-} x$, then $x \in N$.
Again, $N$ is $\mu$-null so we also obtain: 

$f^- = g^-$ $\mu$-almost everywhere.
$\Box$


Sufficient Condition
Suppose that: 

$f^+ = g^+$ $\mu$-almost everywhere.
and:

$f^- = g^-$ $\mu$-almost everywhere.
Then there exists a $\mu$-null set $N_1 \subseteq X$ such that: 

if $x \in X$ is such that $\map {f^+} x \ne \map {g^+} x$, we have $x \in N_1$.
There also exists a $\mu$-null set $N_2 \subseteq X$ such that: 

if $x \in X$ is such that $\map {f^-} x \ne \map {g^-} x$, we have $x \in N_2$.
From Difference of Positive and Negative Parts, we have:

$f = f^+ - f^-$
and:

$g = g^+ - g^-$
If $x \in X$ is such that $\map {f^+} x = \map {g^+} x$ and $\map {f^-} x = \map {g^-} x$, we therefore have $\map f x = \map g x$.
So by contraposition, if $\map f x \ne \map g x$, then $\map {f^+} x \ne \map {g^+} x$ or $\map {f^-} x \ne \map {g^-} x$. 
Now let $x \in X$ be such that $\map f x \ne \map g x$. 
Then either:

$\map {f^+} x \ne \map {g^+} x$
in which case, $x \in N_1$, or: 

$\map {f^-} x \ne \map {g^-} x$
in which case $x \in N_2$.
So if $x \in X$ is such that $\map f x \ne \map g x$, we have: 

$x \in N_1 \cup N_2$
From Null Sets Closed under Countable Union, we have that: 

$N_1 \cup N_2$ is $\mu$-null.
So:

$f = g$ $\mu$-almost everywhere.
$\blacksquare$





