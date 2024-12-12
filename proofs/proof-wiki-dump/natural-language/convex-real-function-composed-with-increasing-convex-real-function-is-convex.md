# 

Source: https://proofwiki.org/wiki/Convex_Real_Function_Composed_with_Increasing_Convex_Real_Function_is_Convex

Theorem
Let $I$ be real interval.
Let $f : I \to \R$ be a convex function.
Let $J$ be a real interval containing the image of $f$.
Let $g : J \to \R$ be a increasing convex function.

Then $g \circ f : I \to \R$ is a convex function.


Proof
Let $x, y \in I$ and $t \in \closedint 0 1$.
Since $f$ is convex, we have: 

$\map f {t x + \paren {1 - t} y} \le t \map f x + \paren {1 - t} \map f y$
Since $g$ is increasing, we then have: 

$\map {\paren {g \circ f} } {t x + \paren {1 - t} y} \le \map g {t \map f x + \paren {1 - t} \map f y}$
Since $g$ is convex, we then have: 

$\map g {t \map f x + \paren {1 - t} \map f y} \le t \map g {\map f x} + \paren {1 - t} \map g {\map f y}$
so that: 

$\map {\paren {g \circ f} } {t x + \paren {1 - t} y} \le t \map {\paren {g \circ f} } x + \paren {1 - t} \map {\paren {g \circ f} } y$
That is: 

$g \circ f : I \to \R$ is a convex function.
$\blacksquare$





