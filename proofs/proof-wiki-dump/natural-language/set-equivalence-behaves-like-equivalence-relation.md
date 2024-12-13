# 

Source: https://proofwiki.org/wiki/Set_Equivalence_behaves_like_Equivalence_Relation



Theorem
Set equivalence behaves like an equivalence relation.

That is:












  \(\ds \forall S:\)

\(\ds S \sim S \)   





Reflexivity   

  










  \(\ds \forall S, T:\)

\(\ds S \sim T \implies T \sim S \)   





Symmetry   

  










  \(\ds \forall S_1, S_2, S_3:\)

\(\ds S_1 \sim S_2 \land S_2 \sim S_3 \implies S_1 \sim S_3 \)   





Transitivity   

  

where $S, T, S_1, S_2, S_3$ are sets.


Proof
For two sets to be equivalent, there needs to exist a bijection between them.

In the following, let $\phi$, $\phi_1$ and $\phi_2$  be understood to be bijections.


Reflexive
From Identity Mapping is Bijection, the identity mapping $I_S: S \to S$ is a bijection from $S$ to $S$.
Thus there exists a bijection from $S$ to itself
Hence by definition $S$ is therefore equivalent to itself.

Thus $\sim$ is seen to behave like a reflexive relation.
$\Box$


Symmetric













\(\ds \)

\(\)







\(\ds S \sim T\)




















\(\ds \)

\(\leadsto\)







\(\ds \exists \phi: S \to T\)





Definition of Set Equivalence, where $\phi$ is a bijection














\(\ds \)

\(\leadsto\)







\(\ds \exists \phi^{-1}: T \to S\)





Bijection iff Inverse is Bijection














\(\ds \)

\(\leadsto\)







\(\ds T \sim S\)





Definition of Set Equivalence: $\phi^{-1}$ is also a bijection




Thus $\sim$ is seen to behave like a symmetric relation.
$\Box$


Transitive













\(\ds \)

\(\)







\(\ds S_1 \sim S_2 \land S_2 \sim S_3\)




















\(\ds \)

\(\leadsto\)







\(\ds \exists \phi_1: S_1 \to S_2 \land \exists \phi_2: S_2 \to S_3\)





Definition of Set Equivalence: $\phi_1$ and $\phi_2$ are bijections














\(\ds \)

\(\leadsto\)







\(\ds \exists \phi_2 \circ \phi_1: S_1 \to S_3\)





Composite of Bijections is Bijection: $\phi_2 \circ \phi_1$ is a bijection














\(\ds \)

\(\leadsto\)







\(\ds S_1 \sim S_3\)





Definition of Set Equivalence




Thus $\sim$ is seen to behave like a transitive relation.
$\blacksquare$


Warning
It has been shown that set equivalence exhibits the same properties as an equivalence relation.
However, it is important to note that set equivalence is not strictly speaking a relation.
This is because the collection of all sets is itself specifically not a set, but a class.
Hence it is incorrect to refer to $\sim$ as an equivalence relation, although it is useful to be able to consider it as behaving like an equivalence relation.


Also see
The definition of a cardinal of a set as the equivalence class of that set under set equivalence.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $2$. Set Theoretical Equivalence and Denumerability
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.7$. Similar sets
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.1$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2.3$: Equivalence of sets (footnote $6$)
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions: Problem Set $\text{A}.4$: $26$
1999: András Hajnal and Peter Hamburger: Set Theory ... (previous) ... (next): $2$. Definition of Equivalence. The Concept of Cardinality. The Axiom of Choice: Theorem $2.1$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.2$




