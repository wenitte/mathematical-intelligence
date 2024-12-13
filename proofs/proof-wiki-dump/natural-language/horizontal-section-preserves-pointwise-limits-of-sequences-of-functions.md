# 

Source: https://proofwiki.org/wiki/Horizontal_Section_preserves_Pointwise_Limits_of_Sequences_of_Functions

Theorem
Let $X$ and $Y$ be sets. 
Let $f : X \times Y \to \overline \R$ be a function.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence of functions converging pointwise to $f$. 
Let $y \in Y$. 

Then: 

$\paren {f_n}^y \to f^y$
pointwise, where: 

$\paren {f_n}^y$ denotes the $y$-horizontal section of $f_n$
$f^y$ denotes the $y$-horizontal section of $f$.


Proof
From the definition of pointwise convergence, we have: 

$\ds \map f {x, y} = \lim_{n \mathop \to \infty} \map {f_n} {x, y}$
for each $x \in X$ and $y \in Y$. 
Fix $y \in Y$. 
From the definition of the $y$-horizontal section, we have: 

$\map {f_n} {x, y} = \map {\paren {f_n}^y} x$
and:

$\map f {x, y} = \map {f^y} x$
So:

$\ds \map {f^y} x = \lim_{n \mathop \to \infty} \map {\paren {f_n}^y} x$
for each $x \in X$. 
So:

$\paren {f_n}^y \to f^y$
pointwise.
$\blacksquare$





