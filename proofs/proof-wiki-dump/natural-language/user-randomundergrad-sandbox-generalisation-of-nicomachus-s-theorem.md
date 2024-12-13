# 

Source: https://proofwiki.org/wiki/User:RandomUndergrad/Sandbox/Generalisation_of_Nicomachus%27s_Theorem

A Generalization of Nicomachus's Theorem
Nicomachus's Theorem:

$\forall n \in \N_{>0}: n^3 = \left({n^2 - n + 1}\right) + \left({n^2 - n + 3}\right) + \ldots + \left({n^2 + n - 1}\right)$
can be easily be generalized to 

$\forall n \in \N_{>0}: \forall k \in \R: n^k = \left({n^{k - 1} - n + 1}\right) + \left({n^{k - 1} - n + 3}\right) + \ldots + \left({n^{k - 1} + n - 1}\right)$
by mimicking Nicomachus's Theorem/Proof 2  (basically replacing $n^2$ by $n^{k - 1}$)
From the definition:

$\left({n^{k - 1} - n + 1}\right) + \left({n^{k - 1} - n + 3}\right) + \ldots + \left({n^{k - 1} + n - 1}\right)$
can be written:

$\left({n^{k - 1} - n + 1}\right) + \left({n^{k - 1} - n + 3}\right) + \ldots + \left({n^{k - 1} - n + 2 n - 1}\right)$
Writing this in sum notation:














\(\ds \)

\(\)







\(\ds \left({n^{k - 1} - n + 1}\right) + \left({n^{k - 1} - n + 3}\right) + \ldots + \left({n^{k - 1} - n + 2 n - 1}\right)\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \left({n^{k - 1} - n + 2 k - 1}\right)\)




















\(\ds \)

\(=\)







\(\ds n \left({n^{k - 1} - n}\right) + \sum_{k \mathop = 1}^n \left({2 k - 1}\right)\)




















\(\ds \)

\(=\)







\(\ds n^k - n^2 + n^2\)





Odd Number Theorem














\(\ds \)

\(=\)







\(\ds n^k\)









$\blacksquare$

However, the property "the first term for $\left({n + 1}\right)^3$ is $2$ greater than the last term for $n^3$" is lost,
all that remains is if $k$ is a strictly positive integer, the summands are consecutive odd integers for each $n$.

This result was found in 
Nelsen, R.B. (1993). Proof Without Words: Exercises in Visual Thinking. Math. Assoc. of America, 1993. ISBN 0-88385-700-6, pp.93,
with the title "$k^\text{th}$ Powers as Sums of Consecutive Numbers", where a visual representation of the result is shown, for $k=2,3\dots$





