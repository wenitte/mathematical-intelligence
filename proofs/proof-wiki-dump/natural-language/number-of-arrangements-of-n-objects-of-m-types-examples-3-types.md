# 

Source: https://proofwiki.org/wiki/Number_of_Arrangements_of_n_Objects_of_m_Types/Examples/3_Types

Example of Use of Number of Arrangements of $n$ Objects of $m$ Types
Let $S$ be a collection of $\paren {p + q + r}$ objects.
Let $S$ need to be partitioned into $3$ subsets of size $p$, $q$ and $r$ such that $p \ne q$, $q \ne r$ and $r \ne p$.
The total number $N$ of ways this can be done is:

$N = \dfrac {\paren {p + q + r}!}  {p! \, q! \, r!}$


Proof
The number of ways of choosing $p$ from $\paren {p + q + r}$ is $\dbinom {p + q + r} p$.
The number of ways of choosing $q$ from the remaining $\paren {q + r}$ is $\dbinom {q + r} q$.
We are left with the remaining $r$.
Hence $N$ can be given by:














\(\ds N\)

\(=\)







\(\ds \dbinom {p + q + r} p \dbinom {q + r} q\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {p + q + r}!} {p! \paren {q + r}!} \dfrac {\paren {q + r}!} {q! \, r!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {p + q + r}!}  {p! \, q! \, r!}\)









Hence the result.
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: The number of ways of dividing $\paren {p + q + r}$ things into three unequal groups, the first to contain $p$, the second $q$ and the third $r$




