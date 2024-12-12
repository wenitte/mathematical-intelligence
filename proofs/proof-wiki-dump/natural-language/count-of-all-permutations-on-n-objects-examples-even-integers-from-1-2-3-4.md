# 

Source: https://proofwiki.org/wiki/Count_of_All_Permutations_on_n_Objects/Examples/Even_Integers_from_1,_2,_3,_4

Example of Count of All Permutations on $n$ Objects
Let $N$ be the number of even integers which can be made using one or more of the digits $1$, $2$, $3$ and $4$ no more than once each.
Then:

$N = 32$


Proof
From Count of All Permutations on $n$ Objects, the total number of integers which can be made using the digits $1$, $2$, $3$ and $4$ is given by:














\(\ds 4! \sum_{k \mathop = 0}^3 \dfrac 1 {k!}\)

\(=\)







\(\ds 24 \paren {\dfrac 1 {0!} + \dfrac 1 {1!} + \dfrac 1 {2!} + \dfrac 1 {3!} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {24} 1 + \dfrac {24} 1 + \dfrac {24} 2 + \dfrac {24} 6\)




















\(\ds \)

\(=\)







\(\ds 24 + 24 + 12 + 4\)




















\(\ds \)

\(=\)







\(\ds 64\)









By symmetry, exactly half of these integers end in $2$ or $4$.
The others end in $1$ or $3$.
Hence:

$N = \dfrac {64} 2 = 32$
$\blacksquare$





