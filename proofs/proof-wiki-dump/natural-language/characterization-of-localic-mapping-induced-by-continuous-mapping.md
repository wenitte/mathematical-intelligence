# 

Source: https://proofwiki.org/wiki/Characterization_of_Localic_Mapping_Induced_by_Continuous_Mapping


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T_1 = \struct{S_1, \tau_1}, T_2 = \struct{S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to \T_2$ be a continuous mapping.

Let $\map \Omega {T_1}, \map \Omega {T_2}$ be the locales of $T_1$ and $T_2$ respectively.
Let $F : \map \Omega {T_1} \to \map \Omega {T_2}$ be the localic mapping induced by $f$.

Then:

$\forall U \in \tau_1 : \map F U = S_2 \setminus f \sqbrk{S_1 \setminus U}^-$
where:

$S_2 \setminus f \sqbrk{S_1 \setminus U}^-$ denotes the relative complement of $f \sqbrk{S_1 \setminus U}^-$ in $S_2$
$f \sqbrk{S_1 \setminus U}^-$ denotes the closure of $f \sqbrk{S_1 \setminus U}$ in $T_2$
$f \sqbrk{S_1 \setminus U}$ denotes the image of $S_1 \setminus U$ under $f$
$S_1 \setminus U$ denotes the relative complement of $U$ in $S_1$
Proof
Let $G : \map \Omega {T_2} \to \map \Omega {T_1}$ be the frame homomorphism of $f$.

By definition of localic mapping induced by $f$, $F$ is the upper adjoint to $G$.

Hence:

$\tuple{F, G}$ is a Galois connection

We have:










\(\ds \forall U \in \tau_1, V \in \tau_2: \, \)



\(\ds V\)

\(\subseteq\)







\(\ds \map F U\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map G V\)

\(\subseteq\)







\(\ds U\)





Definition of Galois Connection








\(\ds \leadstoandfrom \ \ \)





\(\ds f^{-1} \sqbrk V\)

\(\subseteq\)







\(\ds U\)





Definition of Frame Homomorphism of Continuous Mapping




\(\text {(1)}: \quad\)



\(\ds \leadstoandfrom \ \ \)





\(\ds V\)

\(\subseteq\)







\(\ds S_2 \setminus f \sqbrk {S_1 \setminus U}\)





Preimage is Subset Iff Subset of Complement of Image of Complement




Next, we have:










\(\ds \forall U \in \tau_1: \, \)



\(\ds \map F U\)

\(\subseteq\)







\(\ds \map F U\)





Set is Subset of Itself














\(\ds \)

\(\subseteq\)







\(\ds S_2 \setminus f \sqbrk {S_1 \setminus U}\)





from $\paren 1$ and $\map F U \in \tau_2$








\(\ds \leadsto \ \ \)

\(\ds \forall U \in \tau_1: \, \)



\(\ds f \sqbrk {S_1 \setminus U}\)

\(\subseteq\)







\(\ds S_2 \setminus \map F U\)





Relative Complement inverts Subsets of Relative Complement








\(\ds \leadsto \ \ \)

\(\ds \forall U \in \tau_1: \, \)



\(\ds f \sqbrk {S_1 \setminus U}^-\)

\(\subseteq\)







\(\ds S_2 \setminus \map F U\)





Closure of Subset of Closed Set of Topological Space is Subset and $S_2 \setminus \map F U$ is closed in $T_2$




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \forall U \in \tau_1: \, \)



\(\ds \map F U\)

\(\subseteq\)







\(\ds S_2 \setminus f \sqbrk {S_1 \setminus U}^-\)





Relative Complement inverts Subsets of Relative Complement




And we have:










\(\ds \forall U \in \tau_1: \, \)



\(\ds f \sqbrk {S_1 \setminus U}\)

\(\subseteq\)







\(\ds f \sqbrk {S_1 \setminus U}^-\)





Set is Subset of its Topological Closure








\(\ds \leadsto \ \ \)

\(\ds \forall U \in \tau_1: \, \)



\(\ds S_2 \setminus f \sqbrk {S_1 \setminus U}^-\)

\(\subseteq\)







\(\ds S_2 \setminus f \sqbrk {S_1 \setminus U}\)





Relative Complement inverts Subsets




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \forall U \in \tau_1: \, \)



\(\ds S_2 \setminus f \sqbrk {S_1 \setminus U}^-\)

\(\subseteq\)







\(\ds \map F U\)





from $\paren 1$




From $\paren 2$, $\paren 3$ and set equality:

$\forall U \in \tau_1 : \map F U = S_2 \setminus f \sqbrk {S_1 \setminus U}^-$
$\blacksquare$





