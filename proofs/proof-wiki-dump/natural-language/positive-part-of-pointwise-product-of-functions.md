# 

Source: https://proofwiki.org/wiki/Positive_Part_of_Pointwise_Product_of_Functions

Theorem
Let $X$ be a set. 
Let $f, g : X \to \overline \R$ be extended real-valued functions.

Then: 

$\map {\paren {f \cdot g}^+} x = \begin{cases}\map {f^+} x \map {g^+} x & \map f x \ge 0 \text { and } \map g x \ge 0 \\ \map {f^-} x \map {g^-} x & \map f x \le 0 \text { and } \map g x \le 0 \\ 0 & \text {otherwise}\end{cases}$
for each $x \in X$, where: 

$f \cdot g$ is the pointwise product of $f$ and $g$
$\paren {f \cdot g}^+$ denotes the positive part


Proof
Let $x \in X$ be such that $\map f x \ge 0$ and $\map g x \ge 0$. 
Then:

$\map {\paren {f \cdot g} } x = \map f x \map g x \ge 0$
From the definition of the positive part, we then have: 

$\map {\paren {f \cdot g}^+} x = \map f x \map g x$
Now let $x \in X$ be such that $\map f x \le 0$ and $\map g x \le 0$.
Then, we have: 

$\map {f^-} x = -\map f x$
and:

$\map {g^-} x = -\map g x$
from the definition of the negative part. 
Then, we have: 

$\map f x \map g x \ge 0$
So again:














\(\ds \map {\paren {f \cdot g}^+} x\)

\(=\)







\(\ds \map f x \map g x\)





Definition of Positive Part














\(\ds \)

\(=\)







\(\ds \paren {-\map {f^-} x} \paren {-\map {g^-} x}\)




















\(\ds \)

\(=\)







\(\ds \map {f^-} x \map {g^-} x\)









Now suppose that $x \in X$ is such that neither of: 

$\map f x \ge 0$ and $\map g x \ge 0$
or:

$\map f x \le 0$ and $\map g x \le 0$
are true. 
Then, we have either $\map f x > 0$ and $\map g x < 0$, or $\map f x < 0$ and $\map g x > 0$.
In either case: 

$\map f x \map g x < 0$
So, from the definition of the positive part, we have: 

$\map {\paren {f \cdot g}^+} x = 0$
$\blacksquare$





