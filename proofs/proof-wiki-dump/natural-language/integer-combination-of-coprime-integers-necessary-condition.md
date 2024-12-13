# 

Source: https://proofwiki.org/wiki/Integer_Combination_of_Coprime_Integers/Necessary_Condition



Theorem
Let $a, b \in \Z$ be integers, not both zero.
Let $a$ and $b$ be such that there exists an integer combination of them equal to $1$.
Then $a$ and $b$ are coprime:

$\forall a, b \in \Z: \exists m, n \in \Z: m a + n b = 1 \implies a \perp b$
In such an integer combination $m a + n b = 1$, the integers $m$ and $n$ are also coprime.


Proof 1









\(\ds \exists m, n \in \Z: \, \)



\(\ds m a + n b\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(\divides\)







\(\ds 1\)





Set of Integer Combinations equals Set of Multiples of GCD








\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\perp\)







\(\ds b\)





Definition of Coprime Integers



$\blacksquare$


Proof 2
Let $a, b \in \Z$ be such that $\exists m, n \in \Z: m a + n b = 1$.
Let $d$ be a divisor of both $a$ and $b$.
Then:

$d \divides m a + n b$
and so:

$d \divides 1$
Thus:

$d = \pm 1$
and so:

$\gcd \set {a, b} = 1$
Thus, by definition, $a$ and $b$ are coprime.
$\blacksquare$


Also known as
This result is sometimes known as Bézout's Identity, although that result is usually used for the more general result for not necessarily coprime integers.
Some sources refer to this result as the Euclidean Algorithm, but the latter as generally understood is the procedure that can be used to establish the values of $m$ and $n$, and for any pair of integers, not necessarily coprime.





