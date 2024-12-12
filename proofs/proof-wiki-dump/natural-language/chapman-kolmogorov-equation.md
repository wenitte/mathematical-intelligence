# 

Source: https://proofwiki.org/wiki/Chapman-Kolmogorov_Equation


This article needs to be linked to other articles.In particular: also, categoriesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $X$ be a homogeneous Markov chain with $n$-step transition probability matrix:

$\mathbf P^{\paren n} = \sqbrk { {p_{j k} }^{\paren n} }_{j, k \mathop \in S}$
where:

${p_{j k} }^{\paren n} = \condprob {X_n = k} {X_0 = j} $ is the $n$-step transition probability.

Then:

$\mathbf P^{\paren {n + m} } = \mathbf P^{\paren n} \mathbf P^{\paren m}$
or equivalently:

$\ds {p_{i j} }^{\paren {n + m} } = \sum_{k \mathop \in S} {p_{i k} }^{\paren n} {p_{k j} }^{\paren m}$


Proof
We consider the conditional probability on the left hand side:














\(\ds \ds {p_{i j} }^{\paren {n + m} }\)

\(=\)







\(\ds \map \Pr {X_{m + n} = j \mid X_0 = i}\)




















\(\ds \)

\(=\)







\(\ds \condprob {\paren {\bigcup_{k \mathop \in S} \sqbrk {X_{n + m} = j, X_n = k} } } {X_0 = i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in S} \condprob {X_{n + m} = j, X_n = k} {X_0 = i}\)





Definition of Countable Additivity














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in S} \condprob {X_{n + m} = j} {X_n = k, X_0 = i} \times \condprob {X_n = k} {X_0 = i}\)





Chain Rule for Probability














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in S} \condprob {X_{n + m} = j} {X_n = k} \times \condprob {X_n = k} {X_0 = i}\)





Markov Property














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in S} \condprob {X_{0 + m} = j} {X_0 = k} \times \condprob {X_n = k} {X_0 = i}\)





Transition Probabilities of Homogeneous Markov Chain














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in S} {p_{i k} }^{\paren n} {p_{k j} }^{\paren m}\)









$\blacksquare$


Source of Name
This entry was named for Sydney Chapman and Andrey Nikolaevich Kolmogorov.





