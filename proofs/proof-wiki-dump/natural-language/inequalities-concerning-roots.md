# 

Source: https://proofwiki.org/wiki/Inequalities_Concerning_Roots

Theorem
Let $\closedint X Y$ be a closed real interval such that $0 < X \le Y$.
Let $x, y \in \closedint X Y$.

Then:

$\forall n \in \N_{> 0}: X Y^{1/n} \size {x - y} \le n X Y \size {x^{1/n} - y^{1/n} } \le Y X^{1/n} \size {x - y}$


Proof
From Difference of Two Powers:

$\ds a^n - b^n = \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + a^{n - 3} b^2 + \dotsb + a b^{n - 2} + b^{n - 1} } = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$
Let $a > b > 0$.
Then:

$\dfrac {a^n - b^n} {a - b} = a^{n - 1} + a^{n - 2} b + a^{n - 3} b^2 + \dotsb + a b^{n - 2} + b^{n - 1}$
Also, note that:

$b^{n - 1} = b^{n - j - 1} b^j \le a^{n - j - 1} b^j \le a^{n - j -1} a^j \le a^{n - 1}$

Hence if $a > b > 0$:

$n b^{n - 1} \le \dfrac {a^n - b^n} {a - b} \le n a^{n - 1}$
Taking reciprocals:

$\dfrac 1 {n b^{n - 1} } \ge \dfrac {a - b} {a^n - b^n} \ge \dfrac 1 {n a^{n - 1} }$
Thus:

$\dfrac {a^n - b^n} {n a^{n - 1} } \le a - b \le \dfrac {a^n - b^n} {n b^{n - 1} } \implies \dfrac {a \paren {a^n - b^n} } {a^n} \le n \paren {a - b} \le \dfrac {b \paren {a^n - b^n} } {b^n}$

Now suppose $x > y$.
Then:

$x - y = \size {x - y}$
and:

$x^{1/n} - y^{1/n} = \size {x^{1/n} - y^{1/n} }$
Then put $a = x^{1/n}$ and $b = y^{1/n}$ in the above:

$\dfrac {x^{1/n} \size {x - y} } x \le n \size {x^{1/n} - y^{1/n} } \le \dfrac {y^{1/n} \size {x - y} } y$

Multiplying through by $x y$:

$x^{1/n} y \size {x - y} \le n x y \size {x^{1/n} - y^{1/n} } \le x y^{1/n} \size {x - y}$

Similarly, if $y > x$:

$y^{1/n} x \size {x - y} \le n x y \size {x^{1/n} - y^{1/n} } \le y x^{1/n} \size {x - y}$
The result follows after some algebra.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: Exercise $\S 3.11 \ (6)$




