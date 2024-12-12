# 

Source: https://proofwiki.org/wiki/Existence_of_Solution_of_2nd_Order_Linear_ODE

Theorem
Let $\map P x$, $\map Q x$ and $\map R x$ be continuous real functions on a closed interval $I = \closedint a b$.
Let $x_0 \in I$, and let $y_0 \in \R$ and $y_0' \in \R$ be arbitrary.
Then the initial value problem:

$\ds \frac {\d^2 y}{\d x^2} + \map P x \frac {\d y}{\d x} + \map Q x y = \map R x, \map y {x_0} = y_0, \map {y'} {x_0} = y_0'$
has one and only one solution $y = \map y x$ on the interval $I$.


Proof
Let us introduce the variable $z = \dfrac {\d y}{\d x}$.
Then the initial ODE can be written:

$\begin{cases}
\dfrac {\d y}{\d x} = z & : \map y {x_0} = y_0 \\
& \\
\dfrac {\d z}{\d x} = - \map P x z - \map Q x y + \map R x & : \map z {x_0} = y_0'
\end{cases}$
The converse is also true.
The result follows from Existence of Solution to System of First Order ODEs.
$\blacksquare$





