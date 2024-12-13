# 

Source: https://proofwiki.org/wiki/Hilbert_Proof_System_Instance_2_Independence_Results/Independence_of_A4



Theorem
Let $\mathscr H_2$ be Instance 2 of the Hilbert proof systems.
Then:

Axiom $(\text A 4)$ is independent from $(\text A 1)$, $(\text A 2)$, $(\text A 3)$.


Proof
Denote with $\mathscr H_2 - (\text A 4)$ the proof system resulting from $\mathscr H_2$ by removing axiom $(\text A 4)$.
Consider $\mathscr C_5$, Instance 5 of constructed semantics.
We will prove that:

$\mathscr H_2 - (\text A 4)$ is sound for $\mathscr C_5$;
Axiom $(\text A 4)$ is not a tautology in $\mathscr C_5$
which leads to the conclusion that $(\text A 4)$ is not a theorem of $\mathscr H_2 - (\text A 4)$.


Soundness of $\mathscr H_2 - (\text A 4)$ for $\mathscr C_5$
Starting with the axioms:




\((\text A 1)\)  

$:$  



Rule of Idempotence   



\(\ds \paren {p \lor p} \implies p \)   







  Proof of Tautology


\((\text A 2)\)  

$:$  



Rule of Addition   



\(\ds q \implies \paren {p \lor p} \)   







  Proof of Tautology


\((\text A 3)\)  

$:$  



Rule of Commutation   



\(\ds \paren {p \lor q} \implies \paren {q \lor p} \)   







  Proof of Tautology


Next it needs to be shown that the rules of inference of $\mathscr H_2$ preserve $\mathscr C_5$-tautologies.


Rule $\text {RST} 1$: Rule of Uniform Substitution
By definition, any WFF is assigned a value from $\set {0, 1, 2, 3}$.
Thus, in applying Rule $\text {RST} 1$, we are introducing $0$, $1$, $2$ or $3$ in the position of a propositional variable.
But all possibilities of assignments to such propositional variables were shown not to affect the resulting values of the axioms.
Hence Rule $\text {RST} 1$ preserves $\mathscr C_5$-tautologies.


Rule $\text {RST} 2$: Rule of Substitution by Definition
Because the definition of $\mathscr C_5$ was given in terms of Rule $\text {RST} 2$, it cannot affect any of its results.


Rule $\text {RST} 3$: Rule of Detachment
Suppose $\mathbf A$ and $\mathbf A \implies \mathbf B$ both take value $0$.
Then using Rule $\text {RST}  2$, definition $(2)$, we get:

$\neg \mathbf A \lor \mathbf B$
taking value $0$ by assumption.
But $\neg \mathbf A$ takes value $1$ by definition of $\neg$.
So from the definition of $\lor$, it must be that $\mathbf B$ takes value $0$.
Hence Rule $\text {RST} 3$ also produces only WFFs of value $0$.


Rule $\text {RST} 4$: Rule of Adjunction
Suppose $\mathbf A$ and $\mathbf B$ take value $0$.
Then using the definitional abbreviations:

$\mathbf A \land \mathbf B =_{\text {def} } \neg \paren {\neg \mathbf A \lor \neg \mathbf B}$
We compute:














\(\ds \mathbf A \land \mathbf B\)

\(=\)







\(\ds 0 \land 0\)




















\(\ds \)

\(=\)







\(\ds \neg \paren {\neg 0 \lor \neg 0}\)





Rule $\text {RST} 2 \, (1)$














\(\ds \)

\(=\)







\(\ds \neg \paren {1 \lor 1}\)




















\(\ds \)

\(=\)







\(\ds \neg 1\)




















\(\ds \)

\(=\)







\(\ds 0\)









proving that Rule $\text {RST} 4$ also produces only $0$s from $0$s.

Hence $\mathscr H_2 - (\text A 4)$ is sound for $\mathscr C_5$.


$(\text A 4)$ is not a $\mathscr C_5$-tautology
Recall axiom $(\text A 4)$, the Factor Principle:

$\paren {p \lor q} \implies \paren {q \lor p}$
Under $\mathscr C_5$, we can use definitional abbreviations to arrive at:

$\neg \paren {\neg p \lor q} \lor \paren {\neg \paren {r \lor p} \lor \paren {r \lor q} }$
Applying the definition of $\mathscr C_5$, we have the following:

$\begin{array}{|ccccc|c|cccccccc|} \hline
\neg & (\neg & p & \lor & q) & \lor & (\neg & (r & \lor & p) & \lor & (r & \lor & q)) \\
\hline
1 & 1 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
1 & 3 & 2 & 0 & 0 & 0 & 1 & 0 & 0 & 2 & 0 & 0 & 0 & 0 \\
1 & 0 & 3 & 0 & 0 & 0 & 1 & 0 & 0 & 3 & 0 & 0 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 0 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 0 & 0 \\
1 & 3 & 2 & 0 & 0 & 0 & 3 & 1 & 2 & 2 & 0 & 1 & 0 & 0 \\
1 & 0 & 3 & 0 & 0 & 0 & 0 & 1 & 3 & 3 & 0 & 1 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 & 0 & 1 & 2 & 0 & 0 & 0 & 2 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 3 & 2 & 2 & 1 & 0 & 2 & 0 & 0 \\
1 & 3 & 2 & 0 & 0 & 0 & 3 & 2 & 2 & 2 & 0 & 2 & 0 & 0 \\
1 & 0 & 3 & 0 & 0 & 0 & 1 & 2 & 0 & 3 & 0 & 2 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 & 0 & 1 & 3 & 0 & 0 & 0 & 3 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 0 & 3 & 3 & 1 & 0 & 3 & 0 & 0 \\
1 & 3 & 2 & 0 & 0 & 0 & 1 & 3 & 0 & 2 & 0 & 3 & 0 & 0 \\
1 & 0 & 3 & 0 & 0 & 0 & 0 & 3 & 3 & 3 & 0 & 3 & 0 & 0 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 1 \\
0 & 3 & 2 & 3 & 1 & 0 & 1 & 0 & 0 & 2 & 0 & 0 & 0 & 1 \\
1 & 0 & 3 & 0 & 1 & 0 & 1 & 0 & 0 & 3 & 0 & 0 & 0 & 1 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 1 & 1 & 1 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 1 & 1 \\
0 & 3 & 2 & 3 & 1 & 0 & 3 & 1 & 2 & 2 & 3 & 1 & 1 & 1 \\
1 & 0 & 3 & 0 & 1 & 0 & 0 & 1 & 3 & 3 & 0 & 1 & 1 & 1 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 & 2 & 0 & 0 & 2 & 2 & 2 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 3 & 2 & 2 & 1 & 0 & 2 & 2 & 1 \\
0 & 3 & 2 & 3 & 1 & 0 & 3 & 2 & 2 & 2 & 0 & 2 & 2 & 1 \\
2 & 1 & 2 & 0 & 3 & 2 & 2 & 2 & 1 & 1 & 0 & 3 & 0 & 1 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 & 3 & 0 & 0 & 3 & 3 & 3 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 0 & 3 & 3 & 1 & 0 & 3 & 3 & 1 \\
0 & 3 & 2 & 3 & 1 & 0 & 1 & 3 & 0 & 2 & 3 & 3 & 3 & 1 \\
1 & 0 & 3 & 0 & 1 & 0 & 0 & 3 & 3 & 3 & 0 & 3 & 3 & 1 \\
3 & 1 & 0 & 2 & 2 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 2 \\
1 & 0 & 1 & 0 & 2 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 2 \\
1 & 3 & 2 & 0 & 2 & 0 & 1 & 0 & 0 & 2 & 0 & 0 & 0 & 2 \\
1 & 0 & 3 & 0 & 2 & 0 & 1 & 0 & 0 & 3 & 0 & 0 & 0 & 2 \\
3 & 1 & 0 & 2 & 2 & 0 & 1 & 1 & 0 & 0 & 2 & 1 & 2 & 2 \\
1 & 0 & 1 & 0 & 2 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 2 & 2 \\
1 & 3 & 2 & 0 & 2 & 0 & 3 & 1 & 2 & 2 & 0 & 1 & 2 & 2 \\
1 & 0 & 3 & 0 & 2 & 0 & 0 & 1 & 3 & 3 & 0 & 1 & 2 & 2 \\
3 & 1 & 0 & 2 & 2 & 0 & 1 & 2 & 0 & 0 & 2 & 2 & 2 & 2 \\
1 & 0 & 1 & 0 & 2 & 0 & 3 & 2 & 2 & 1 & 0 & 2 & 2 & 2 \\
1 & 3 & 2 & 0 & 2 & 0 & 3 & 2 & 2 & 2 & 0 & 2 & 2 & 2 \\
1 & 0 & 3 & 0 & 2 & 2 & 1 & 2 & 0 & 3 & 2 & 2 & 2 & 2 \\
3 & 1 & 0 & 2 & 2 & 0 & 1 & 3 & 0 & 0 & 0 & 3 & 0 & 2 \\
1 & 0 & 1 & 0 & 2 & 0 & 0 & 3 & 3 & 1 & 0 & 3 & 0 & 2 \\
1 & 3 & 2 & 0 & 2 & 0 & 1 & 3 & 0 & 2 & 0 & 3 & 0 & 2 \\
1 & 0 & 3 & 0 & 2 & 0 & 0 & 3 & 3 & 3 & 0 & 3 & 0 & 2 \\
0 & 1 & 0 & 3 & 3 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 3 \\
1 & 0 & 1 & 0 & 3 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 3 \\
0 & 3 & 2 & 3 & 3 & 0 & 1 & 0 & 0 & 2 & 0 & 0 & 0 & 3 \\
1 & 0 & 3 & 0 & 3 & 0 & 1 & 0 & 0 & 3 & 0 & 0 & 0 & 3 \\
0 & 1 & 0 & 3 & 3 & 0 & 1 & 1 & 0 & 0 & 3 & 1 & 3 & 3 \\
1 & 0 & 1 & 0 & 3 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 3 & 3 \\
0 & 3 & 2 & 3 & 3 & 0 & 3 & 1 & 2 & 2 & 3 & 1 & 3 & 3 \\
1 & 0 & 3 & 0 & 3 & 0 & 0 & 1 & 3 & 3 & 0 & 1 & 3 & 3 \\
0 & 1 & 0 & 3 & 3 & 0 & 1 & 2 & 0 & 0 & 0 & 2 & 0 & 3 \\
1 & 0 & 1 & 0 & 3 & 0 & 3 & 2 & 2 & 1 & 0 & 2 & 0 & 3 \\
0 & 3 & 2 & 3 & 3 & 0 & 3 & 2 & 2 & 2 & 0 & 2 & 0 & 3 \\
1 & 0 & 3 & 0 & 3 & 0 & 1 & 2 & 0 & 3 & 0 & 2 & 0 & 3 \\
0 & 1 & 0 & 3 & 3 & 0 & 1 & 3 & 0 & 0 & 3 & 3 & 3 & 3 \\
1 & 0 & 1 & 0 & 3 & 0 & 0 & 3 & 3 & 1 & 0 & 3 & 3 & 3 \\
0 & 3 & 2 & 3 & 3 & 0 & 1 & 3 & 0 & 2 & 3 & 3 & 3 & 3 \\
1 & 0 & 3 & 0 & 3 & 0 & 0 & 3 & 3 & 3 & 0 & 3 & 3 & 3 \\
\hline
\end{array}$
Hence according to the definition of $\mathscr C_5$, $(\text A 4)$ is not a tautology.

Therefore $(\text A 4)$ is independent from $(\text A 1)$, $(\text A 2)$, $(\text A 3)$.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.6$: Independence




