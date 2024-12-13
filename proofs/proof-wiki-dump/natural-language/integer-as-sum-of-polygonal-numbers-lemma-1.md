# 

Source: https://proofwiki.org/wiki/Integer_as_Sum_of_Polygonal_Numbers/Lemma_1

Theorem
Let $n, m \in \N_{>0}$ such that $m \ge 3$.
Let $n < 116 m$.
Then $n$ can be expressed as a sum of at most $m + 2$ polygonal numbers of order $m + 2$.


Proof
From Closed Form for Polygonal Numbers:

$\map P {m + 2, k} = \dfrac m 2 \paren {k^2 - k} + k = m T_{k - 1} + k$
Where $T_{k - 1}$ are triangular numbers.

The first few $\paren {m + 2}$-gonal numbers less than $116 m$ are:

$0, 1, m + 2, 3 m + 3, 6 m + 4, 10 m + 5, 15 m + 6, 21 m + 7, 28 m + 8, 36 m + 9, 45 m + 10, 55 m + 11, 66 m + 12, 78 m + 13, 91 m + 14, 105 m + 15$

We show the expression of the first few numbers explicitly.














\(\ds 1\)

\(=\)







\(\ds 1\)




















\(\ds 2\)

\(=\)







\(\ds 1 + 1\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds m + 1\)

\(=\)







\(\ds 1 + 1 + \dots + 1\)





There are $m + 1$ $1$'s














\(\ds m + 2\)

\(=\)







\(\ds \paren {m + 2}\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 2 m + 3\)

\(=\)







\(\ds \paren {m + 2} + 1 + 1 + \dots + 1\)





There are $m + 1$ $1$'s














\(\ds 2 m + 4\)

\(=\)







\(\ds \paren {m + 2} + \paren {m + 2}\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 3 m + 2\)

\(=\)







\(\ds \paren {m + 2} + \paren {m + 2} + 1 + 1 + \dots + 1\)





There are $m - 2$ $1$'s














\(\ds 3 m + 3\)

\(=\)







\(\ds \paren {3 m + 3}\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 4 m + 4\)

\(=\)







\(\ds \paren {3 m + 3} + 1 + 1 + \dots + 1\)





There are $m + 1$ $1$'s














\(\ds 4 m + 5\)

\(=\)







\(\ds \paren {3 m + 3} + \paren {m + 2}\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 5 m + 5\)

\(=\)







\(\ds \paren {3 m + 3} + \paren {m + 2} + 1 + 1 + \dots + 1\)





There are $m$ $1$'s














\(\ds 5 m + 6\)

\(=\)







\(\ds \paren {m + 2} + \paren {m + 2} + \paren {m + 2} + \paren {m + 2} + 1 + 1 + \dots + 1\)





There are $m - 2$ $1$'s














\(\ds 5 m + 7\)

\(=\)







\(\ds \paren {3 m + 3} + \paren {m + 2} + \paren {m + 2}\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 6 m + 6\)

\(=\)







\(\ds \paren {3 m + 3} + \paren {m + 2} + \paren {m + 2} + 1 + 1 + \dots + 1\)





There are $m - 1$ $1$'s














\(\ds 6 m + 7\)

\(=\)







\(\ds \paren {6 m + 4} + 1 + 1 + 1\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 7 m + 5\)

\(=\)







\(\ds \paren {6 m + 4} + 1 + 1 + \dots + 1\)





There are $m + 1$ $1$'s














\(\ds 7 m + 6\)

\(=\)







\(\ds \paren {6 m + 4} + \paren {m + 2}\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 8 m + 6\)

\(=\)







\(\ds \paren {6 m + 4} + \paren {m + 2} + 1 + 1 + \dots + 1\)





There are $m$ $1$'s














\(\ds 8 m + 7\)

\(=\)







\(\ds \paren {3 m + 3} + \paren {3 m + 3} + \paren {m + 2} + 1 + 1 + \dots + 1\)





There are $m - 1$ $1$'s














\(\ds 8 m + 8\)

\(=\)







\(\ds \paren {6 m + 4} + \paren {m + 2} + \paren {m + 2}\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 9 m + 7\)

\(=\)







\(\ds \paren {6 m + 4} + \paren {m + 2} + \paren {m + 2} + 1 + 1 + \dots + 1\)





There are $m - 1$ $1$'s














\(\ds 9 m + 8\)

\(=\)







\(\ds \paren {6 m + 4} + \paren {3 m + 3} + 1\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 10 m + 8\)

\(=\)







\(\ds \paren {6 m + 4} + \paren {3 m + 3} + 1 + 1 + \dots + 1\)





There are $m$ $1$'s














\(\ds 10 m + 9\)

\(=\)







\(\ds \paren {10 m + 5} + 1 + 1 + 1 + 1\)




















\(\ds \)

\(:\)







\(\ds \)




















\(\ds 11 m + 10\)

\(=\)







\(\ds \paren {10 m + 5} + 1 + 1 + \dots + 1\)





There are $m + 1$ $1$'s



and so on.
$\blacksquare$





