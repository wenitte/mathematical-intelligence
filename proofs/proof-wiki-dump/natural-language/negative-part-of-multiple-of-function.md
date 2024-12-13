# 

Source: https://proofwiki.org/wiki/Negative_Part_of_Multiple_of_Function

Theorem
Let $X$ be a set.
Let $f : X \to \overline \R$ be an extended real-valued function.
Let $\alpha$ be a real number. 

Then:

$\ds \paren {\alpha f}^- = \begin{cases}\alpha f^- & \alpha \ge 0 \\ -\alpha f^+ & \alpha < 0\end{cases}$
where:

$\paren {\alpha f}^-$ and $f^-$ are the negative parts of $\alpha f$ and $f$ respectively
$f^+$ is the positive part of $f$.


Proof
Let $x \in X$. 
First take $\alpha \ge 0$.
Suppose that $\map f x \ge 0$.
Then $\alpha \map f x \ge 0$.
So:

$-\min \set {\alpha \map f x, 0} = 0$
and:

$-\min \set {\map f x, 0} = 0$
So by the definition of the positive part and negative part, we have:

$\map {\paren {\alpha f}^-} x = 0$
and:

$\map {f^-} x = 0$
So:

$\map {\paren {\alpha f}^-} x = \alpha \map {f^-} x$
if $\map f x \ge 0$.
Now suppose that $\map f x < 0$.
Then $\alpha \map f x < 0$.
Then: 

$-\min \set {\map f x, 0} = -\map f x$
and:

$-\min \set {\alpha \map f x, 0} = -\alpha \map f x$
So by the definition of the positive part and negative part, we have:

$\map {f^-} x = -\map f x$
and:

$\map {\paren {\alpha f}^-} x = -\alpha \map f x$
So:

$\map {\paren {\alpha f}^-} x = \alpha \map {f^-} x$
if $\map f x < 0$.
So: 

$\paren {\alpha f}^- = \alpha f^-$
if $\alpha \ge 0$. 

Now take $\alpha < 0$. 
Suppose that $\map f x \ge 0$.
Then $\alpha \map f x \le 0$.
Then: 

$-\min \set {\alpha \map f x, 0} = -\alpha \map f x$
and:

$\max \set {\map f x, 0} = \map f x$
So by the definition of the positive part and negative part, we have:

$\map {\paren {\alpha f}^-} x = -\alpha \map f x$
and:

$\map {f^+} x = \map f x$
So:

$\map {\paren {\alpha f}^-} x = -\alpha \map {f^+} x$
if $\map f x \ge 0$.
Now suppose that $\map f x < 0$.
Then $\alpha \map f x > 0$.
We then have: 

$-\min \set {\alpha \map f x, 0} = 0$
and: 

$\max \set {\map f x, 0} = 0$
So by the definition of the positive part and negative part, we have:

$\map {\paren {\alpha f}^-} x = 0$
and:

$\map {f^-} x = 0$
So:

$\map {\paren {\alpha f}^-} x = -\alpha \map {f^+} x$
if $\map f x < 0$.
So: 

$\paren {\alpha f}^- = -\alpha f^+$
if $\alpha \ge 0$. 
$\blacksquare$





