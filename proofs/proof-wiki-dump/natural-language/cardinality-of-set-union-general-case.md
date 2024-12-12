# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_Union/General_Case

Theorem
Let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of sets.
Then:














\(\ds \card {\bigcup_{i \mathop = 1}^n S_i}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \card {S_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \card {S_i \cap S_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop < k \mathop \le n} \card {S_i \cap S_j \cap S_k}\)




















\(\ds \)

\(\)







\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{n - 1} \card {\bigcap_{i \mathop = 1}^n S_i}\)











Proof
By Cardinality is Additive Function, we can apply the Inclusion-Exclusion Principle:

If $f: \SS \to \R$ is an additive function, then:


This article, or a section of it, needs explaining.In particular: What is $\SS$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.













\(\ds \map f {\bigcup_{i \mathop = 1}^n S_i}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map f {S_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \map f {S_i \cap S_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop < k \mathop \le n} \map f {S_i \cap S_j \cap S_k}\)




















\(\ds \)

\(\)







\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{n - 1} \map f {\bigcap_{i \mathop = 1}^n S_i}\)









$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $1$. Sets: Exercise $4$




