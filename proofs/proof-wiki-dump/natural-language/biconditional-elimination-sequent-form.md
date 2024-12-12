# 

Source: https://proofwiki.org/wiki/Biconditional_Elimination/Sequent_Form



Theorem



\(\text {(1)}: \quad\)









\(\ds p \iff q\)

\(\vdash\)







\(\ds p \implies q\)










\(\text {(2)}: \quad\)









\(\ds p \iff q\)

\(\vdash\)







\(\ds q \implies p\)











Proof 1
Form 1
By the tableau method of natural deduction:


$p \iff q \vdash p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


1

$p \implies q$

Biconditional Elimination: $\iff \EE_1$

1



$\blacksquare$


Form 2
By the tableau method of natural deduction:


$p \iff q \vdash q \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


1

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

1



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|ccc||ccc|ccc|} \hline
p & \iff & q & p & \implies & q & q & \implies & p \\
\hline
\F & \T & \F & \F & \T & \F & \F & \T & \F \\
\F & \F & \T & \F & \T & \T & \T & \F & \F \\
\T & \F & \F & \T & \F & \F & \F & \T & \T \\
\T & \T & \T & \T & \F & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, when $p \iff q$ is true so are both $p \implies q$ and $q \implies p$.
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.5$: An aside: proof by contradiction: Exercises $1.6: \ 7$




