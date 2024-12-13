# 

Source: https://proofwiki.org/wiki/Hilbert_Proof_System_Instance_2_Independence_Results/Independence_of_A1



Theorem
Let $\mathscr H_2$ be Instance 2 of the Hilbert proof systems.
Then:

Axiom $(A1)$ is independent from $(A2)$, $(A3)$, $(A4)$.


Proof
Denote with $\mathscr H_2 - (A1)$ the proof system resulting from $\mathscr H_2$ by removing axiom $(A1)$.
Consider $\mathscr C_2$, Instance 2 of constructed semantics.
We will prove that:

$\mathscr H_2 - (A1)$ is sound for $\mathscr C_2$;
Axiom $(A1)$ is not a tautology in $\mathscr C_2$
which leads to the conclusion that $(A1)$ is not a theorem of $\mathscr H_2 - (A1)$.


Soundness of $\mathscr H_2 - (A1)$ for $\mathscr C_2$
Starting with the axioms:




\((A2)\)  

$:$  



Rule of Addition   



\(\ds q \implies (p \lor q) \)   







  Proof of Tautology


\((A3)\)  

$:$  



Rule of Commutation   



\(\ds (p \lor q) \implies (q \lor p) \)   







  Proof of Tautology


\((A4)\)  

$:$  



Factor Principle   



\(\ds (q \implies r) \implies \left({ (p \lor q) \implies (p \lor r)}\right) \)   







  Proof of Tautology


Next it needs to be shown that the rules of inference of $\mathscr H_2$ preserve $\mathscr C_2$-tautologies.


Rule $RST \, 1$: Rule of Uniform Substitution
By definition, any WFF is assigned a value $0$, $1$ or $2$.
Thus, in applying Rule $RST \, 1$, we are introducing $0$, $1$ or $2$ in the position of a propositional variable.
But all possibilities of assignments of $0$s, $1$s and $2$s to such propositional variables were shown not to affect the resulting value $0$ of the axioms.
Hence Rule $RST \, 1$ preserves $\mathscr C_2$-tautologies.


Rule $RST \, 2$: Rule of Substitution by Definition
Because the definition of $\mathscr C_2$ was given in terms of Rule $RST \, 2$, it cannot affect any of its results.


Rule $RST \, 3$: Rule of Detachment
Suppose $\mathbf A$ and $\mathbf A \implies \mathbf B$ both take value $0$.
Then using Rule $RST \, 2$, definition $(2)$, we get:

$\neg \mathbf A \lor \mathbf B$
taking value $0$ by assumption.
But $\neg \mathbf A$ takes value $1$ by definition of $\neg$.
So from the definition of $\lor$ it must be that $\mathbf B$ takes value $0$.
Hence Rule $RST \, 3$ also produces only WFFs of value $0$.


Rule $RST \, 4$: Rule of Adjunction
Suppose $\mathbf A$ and $\mathbf B$ take value $0$.
Then:














\(\ds \mathbf A \land \mathbf B\)

\(=\)







\(\ds 0 \land 0\)




















\(\ds \)

\(=\)







\(\ds \neg ( \neg 0 \lor \neg 0 )\)





Rule $RST \, 2 \, (1)$














\(\ds \)

\(=\)







\(\ds \neg ( 1 \lor 1 )\)




















\(\ds \)

\(=\)







\(\ds \neg 1\)




















\(\ds \)

\(=\)







\(\ds 0\)









proving that Rule $RST \, 4$ also produces only $0$s from $0$s.

Hence $\mathscr H_2 - (A1)$ is sound for $\mathscr C_2$.


$(A1)$ is not a $\mathscr C_2$-tautology
Recall axiom $(A1)$, the Rule of Idempotence:

$(p \lor p) \implies p$
Under $\mathscr C_2$, we apply a single definitional abbreviation and have the following:

$\begin{array}{|cccc|c|c|} \hline
\neg & (p & \lor & p) & \lor & p \\
\hline
1 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 1 & 1 & 0 & 1 \\
1 & 2 & 0 & 2 & 2 & 2 \\
\hline
\end{array}$
Hence according to the definition of $\mathscr C_2$, $(A1)$ is not a tautology.

Therefore $(A1)$ is independent from $(A2)$, $(A3)$, $(A4)$.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.6$: Independence




