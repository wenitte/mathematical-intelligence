# 

Source: https://proofwiki.org/wiki/Exterior_of_Exterior_of_Union_of_Adjacent_Open_Intervals

Theorem
Let $A$ be the union of the two adjacent open intervals:

$A := \openint a b \cup \openint b c$
Then:

$A^{ee} = \openint a c$
where $A^e$ is the exterior of $A$.


Proof
By definition of exterior, $A^e$ is the complement relative to $\R$ of the closure of $A$ in $\R$.
Thus:














\(\ds A^{ee}\)

\(=\)







\(\ds \paren {\relcomp \R {A^-} }^e\)





Definition of Exterior














\(\ds \)

\(=\)







\(\ds \paren {\relcomp \R {\closedint a c} }^e\)





Closure of Interior of Closure of Union of Adjacent Open Intervals














\(\ds \)

\(=\)







\(\ds \paren {\openint \gets a \cup \openint c \to}^e\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds \relcomp \R {\paren {\openint \gets a \cup \openint c \to}^-}\)





Definition of Exterior














\(\ds \)

\(=\)







\(\ds \relcomp \R {\openint \gets a^- \cup \openint c \to^-}\)





Closure of Finite Union equals Union of Closures














\(\ds \)

\(=\)







\(\ds \relcomp \R {\hointl \gets a \cup \hointr c \to}\)





Closure of Open Ball in Metric Space














\(\ds \)

\(=\)







\(\ds \openint a c\)





Definition of Relative Complement



$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $5 \ \text{(b)}$




