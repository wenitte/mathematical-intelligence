# 

Source: https://proofwiki.org/wiki/Replicative_Function_of_x_minus_Floor_of_x_is_Replicative



Theorem
Let $f: \R \to \R$ be a real function.
Let $f$ be a replicative function.

Let $g: \R \to \R$ be the real function defined as:

$\map g x = \map f {x - \floor x}$

Then $g$ is also a replicative function.


Proof
Lemma
Let $x \in \R$.
Suppose $x - \floor x < \dfrac 1 n$.
Then:

$\floor {x + \dfrac k n} = \dfrac {\floor  {n x} } n$
for any $0 \le k \le n - 1$.
$\Box$

First observe:

$\ds \sum_{k \mathop = 0}^{n - 1} \map g {x + \frac k n} = \sum_{k \mathop = 0}^{n - 1} \map f {x + \frac k n - \floor {x + \frac k n} }$













\(\ds \map g {n x}\)

\(=\)







\(\ds \map f {n x - \floor {n x} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \map f {\frac {n x - \floor {n x} } n + \frac k n}\)





Definition of Replicative Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \map f {x - \frac {\floor {n x} } n + \frac k n}\)









We need to show that the two final sums are equal.

Suppose:

$\dfrac j n \le x - \floor x < \dfrac {j + 1} n$
for some integer $j$.
By Real Number minus Floor:

$0 \le x - \floor x < 1$
This gives:

$0 \le j \le n - 1$

Let $y = x - \dfrac j n$.
Then:

$\floor x \le x - \dfrac j n = y$
By Number not less than Integer iff Floor not less than Integer:

$\floor x \le \floor y$
On the other hand:

$y \le x$
which gives

$\floor y \le \floor x$
So $\floor y = \floor x$.

We now have:

$\dfrac j n \le x - \floor x = y + \dfrac j n - \floor y < \dfrac {j + 1} n$
which gives:

$0 \le y - \floor y < \dfrac 1 n$
which satisfies the condition for the lemma.

Hence:














\(\ds \map f {y + \frac k n - \floor {y + \frac k n} }\)

\(=\)







\(\ds \map f {y - \frac {\floor {n y} } n + \frac k n}\)





by the lemma














\(\ds \)

\(=\)







\(\ds \map f {x - \dfrac j n - \frac {\floor {n x - j} } n + \frac k n}\)




















\(\ds \)

\(=\)







\(\ds \map f {x - \dfrac j n - \frac {\floor {n x} } n + \dfrac j n + \frac k n}\)





Floor of Number plus Integer














\(\ds \)

\(=\)







\(\ds \map f {x - \frac {\floor {n x} } n + \frac k n}\)










We also have:














\(\ds \sum_{k \mathop = 0}^{n - 1} \map f {y + \frac k n - \floor {y + \frac k n} }\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \map f {x - \frac j n + \frac k n - \floor {x - \frac j n + \frac k n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{j - 1} \map f {x + \frac {k - j} n - \floor {x + \frac {k - j} n} } + \sum_{k \mathop = j}^{n - 1} \map f {x + \frac {k - j} n - \floor {x + \frac {k - j} n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{j - 1} \map f {x + \frac {k - j} n + 1 - \floor {x + \frac {k - j} n} - 1} + \sum_{k \mathop = 0}^{n - j - 1} \map f {x + \frac k n - \floor {x + \frac k n} }\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{j - 1} \map f {x + \frac {k - j} n + 1 - \floor {x + \frac {k - j} n + 1} } + \sum_{k \mathop = 0}^{n - j - 1} \map f {x + \frac k n - \floor {x + \frac k n} }\)





Floor of Number plus Integer














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{j - 1} \map f {x + \frac {n - j + k} n + 1 - \floor {x + \frac {n - j + k} n} } + \sum_{k \mathop = 0}^{n - j - 1} \map f {x + \frac k n - \floor {x + \frac k n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = n - j}^{n - 1} \map f {x + \frac k n + 1 - \floor {x + \frac k n} } + \sum_{k \mathop = 0}^{n - j - 1} \map f {x + \frac k n - \floor {x + \frac k n} }\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \map f {x + \frac k n - \floor {x + \frac k n} }\)









Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $39 \ \text{i)}$




