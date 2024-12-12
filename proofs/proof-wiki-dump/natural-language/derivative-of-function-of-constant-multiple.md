# 

Source: https://proofwiki.org/wiki/Derivative_of_Function_of_Constant_Multiple



Theorem
Let $f$ be a real function which is differentiable on $\R$.
Let $c \in \R$ be a constant.

Then:

$\map {D_x} {\map f {c x} } = c \map {D_{c x} } {\map f {c x} }$


Corollary
Let $a, b \in \R$ be constants.

Then:

$\map {\dfrac \d {\d x} } {\map f {a x + b} } = a \, \map {\dfrac \d {\map \d {a x + b} } } {\map f {a x + b} }$


Proof
First it is shown that $\map {D_x} {c x} = c$:














\(\ds \map {D_x} {c x}\)

\(=\)







\(\ds c \map {D_x} x + x \map {D_x} c\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds c + x \map {D_x} c\)





Derivative of Identity Function














\(\ds \)

\(=\)







\(\ds c + 0\)





Derivative of Constant














\(\ds \)

\(=\)







\(\ds c\)










Next:














\(\ds \map {D_x} {\map f {c x} }\)

\(=\)







\(\ds \map {D_x} {c x} \map {D_{c x} } {\map f {c x} }\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds c \map {D_{c x} } {\map f {c x} }\)





from above



$\blacksquare$


Examples
Example: $\sin 2 x$
$\map {\dfrac \d {\d x} } {\sin 2 x} = 2 \cos 2 x$


Example: $\map \cos {a x + b}$
$\map {\dfrac \d {\d x} } {\map \cos {a x + b} } = -a \map \sin {a x + b}$


Example: $\map \sec {a x + b}$
$\map {\dfrac \d {\d x} } {\map \sec {a x + b} } = a \map \sec {a x + b} \map \tan {a x + b}$




