# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Square_Number



Theorem
The following definitions of the concept of Square Number are equivalent:

Definition 1
An integer $n$ is classified as a square number if and only if:

$\exists m \in \Z: n = m^2$
where $m^2$ denotes the integer square function.

Definition 2
$S_n = \begin {cases} 0 & : n = 0 \\ S_{n - 1} + 2 n - 1 & : n > 0 \end {cases}$
Definition 3
$\ds S_n = \sum_{i \mathop = 1}^n \paren {2 i - 1} = 1 + 3 + 5 + \cdots + \paren {2 n - 1}$
Definition 4
$\forall n \in \N: S_n = \map P {4, n} = \begin{cases} 0 & : n = 0 \\ \map P {4, n - 1} + 2 \paren {n - 1} + 1 & : n > 0 \end{cases}$
where $\map P {k, n}$ denotes the $k$-gonal numbers.


Proof
Definition 1 equivalent to Definition 3
By the Odd Number Theorem:

$\ds \sum_{j \mathop = 1}^n \paren {2 j - 1} = n^2$
$\Box$


Definition 2 equivalent to Definition 3
By the Corollary to the Odd Number Theorem:

$S_n = \ds \sum_{j \mathop = 1}^{n - 1} + 2 n - 1$
and so by Definition 2:

$\ds \sum_{j \mathop = 1}^n \paren {2 j - 1} = S_{n-1} + 2 n - 1$
$\Box$


Definition 2 equivalent to Definition 4
We have by definition that $S_n = 0 = \map P {4, n}$.
Then:










\(\ds \forall n \in \N_{>0}: \, \)



\(\ds \map P {4, n}\)

\(=\)







\(\ds \map P {4, n - 1} + \paren {4 - 2} \paren {n - 1} + 1\)




















\(\ds \)

\(=\)







\(\ds \map P {4, n - 1} + 2 \paren {n - 1} + 1\)




















\(\ds \)

\(=\)







\(\ds \map P {4, n - 1} + 2 n - 1\)









Thus $\map P {4, n}$ and $S_n$ are generated by the same recurrence relation.
$\blacksquare$





