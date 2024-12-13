# 

Source: https://proofwiki.org/wiki/Sequence_of_Functions_is_Uniformly_Cauchy_iff_Uniformly_Convergent/Necessary_Condition

Theorem
Let $S \subseteq \R$.
Let $\sequence {f_n}$ be a sequence of real functions $S \to \R$.
Let $\sequence {f_n}$ be uniformly convergent on $S$.

Then $\sequence {f_n}$ is uniformly Cauchy on $S$.


Proof
Let $\epsilon \in \R_{> 0}$ be arbitrary.
Since $f_n \to f$ uniformly, there exists some $N \in \N$ such that: 

$\size {\map {f_n} x - \map f x} < \dfrac \epsilon 2$
for all $x \in S$ and $n > N$. 
Then if $x \in S$ and $n, m > N$, we have:














\(\ds \size {\map {f_n} x - \map {f_m} x}\)

\(=\)







\(\ds \size {\map {f_n} x - \map f x - \paren {\map {f_m} x - \map f x} }\)




















\(\ds \)

\(=\)







\(\ds \size {\map {f_n} x - \map f x} + \size {\map {f_m} x - \map f x}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \epsilon\)









Since $\epsilon$ was arbitrary, $\sequence {f_n}$ is uniformly Cauchy on $S$.
$\blacksquare$





