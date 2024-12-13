# 

Source: https://proofwiki.org/wiki/Rule_of_Addition/Sequent_Form



Theorem
The Rule of Addition can be symbolised by the sequents:




\(\text {(1)}: \quad\)









\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor q\)

\(\)







\(\ds \)












\(\text {(2)}: \quad\)









\(\ds q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor q\)

\(\)







\(\ds \)











Formulation 1



\(\text {(1)}: \quad\)









\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor q\)

\(\)







\(\ds \)












\(\text {(2)}: \quad\)









\(\ds q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor q\)

\(\)







\(\ds \)











Formulation 2



\(\text {(1)}: \quad\)









\(\ds \vdash p\)

\(\implies\)







\(\ds \paren {p \lor q}\)










\(\text {(2)}: \quad\)









\(\ds \vdash q\)

\(\implies\)







\(\ds \paren {p \lor q}\)











Proof 1
Form 1
By the tableau method of natural deduction:


$p \vdash p \lor q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


1

$p \lor q$

Rule of Addition: $\lor \II_1$

1



$\blacksquare$


Form 2
By the tableau method of natural deduction:


$q \vdash p \lor q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q$

Premise

(None)




2


1

$p \lor q$

Rule of Addition: $\lor \II_2$

1


$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|c|c||ccc|} \hline
p & q & p & \lor & q\\
\hline
\F & \F & \F & \F & \F \\
\F & \T & \F & \T & \T \\
\T & \F & \T & \T & \F \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, whenever either $p$ or $q$ (or both) are true, then so is $p \lor q$.
$\blacksquare$





