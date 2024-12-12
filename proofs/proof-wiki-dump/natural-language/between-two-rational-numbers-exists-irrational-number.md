# 

Source: https://proofwiki.org/wiki/Between_two_Rational_Numbers_exists_Irrational_Number



Theorem
Let $a, b \in \Q$ where $a < b$. 
Then:

$\exists \xi \in \R \setminus \Q: a < \xi < b$


Lemma 1
Let $\alpha \in \Q \setminus \set 0$ and $\beta \in \R \setminus \Q$. 
Then: 

$\alpha \cdot \beta \in \R \setminus \Q$


Lemma 2
Let $\alpha \in \Q$ and $\beta \in \R \setminus \Q$. 
Then: 

$\alpha + \beta \in \R \setminus \Q$


Proof 1
Let $d = b - a$.
As $a, b \in \Q: a < b$ it follows from Rational Numbers form Ordered Integral Domain that $d \in \Q: d > 0$.

From Square Root of 2 is Irrational, $\sqrt 2$ is not a rational number, so it is an element of $\R \setminus \Q$.
From Square Number Less than One, for any given real number $x$:

$x^2 < 1 \implies x \in \openint {-1} 1$
Let $k = \dfrac {\sqrt 2} 2$.
Then from Lemma 1:

$k \in \R \setminus \Q$
As $k^2 = \dfrac 1 2$, it follows that $0 < k < 1$.

Let $\xi = a + k d$.
Then, since $a, d \in \Q$ and $k \in \R \setminus \Q$, it follows from Lemma 1 and Lemma 2 that:

$\xi \in \R \setminus \Q$

$d > 0$ and $k > 0$, so:

$\xi = a + k d > a + 0 \cdot 0 = a$

$k < 1$, so:

$\xi = a + k d < a + 1 \cdot d < a + \paren {b - a} = b$

We thus have:

$\xi \in \R \setminus \Q: \xi \in \openint a b$
Hence the result.
$\blacksquare$


Proof 2
From Between two Real Numbers exists Rational Number, there exists $x \in \Q$ such that:

$a - \sqrt2 < x < b - \sqrt2$
Since Square Root of 2 is Irrational, by the Lemma:

$x + \sqrt 2$ is irrational.
But:

$a < x + \sqrt 2 < b$
which is what we wanted to show.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $18 \ (2)$




