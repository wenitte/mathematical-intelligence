# 

Source: https://proofwiki.org/wiki/Elimination_of_all_but_24_Categorical_Syllogisms_as_Invalid



Theorem
Of the $256$ different types of categorical syllogism, all but $24$ can be identified as invalid.

These are the $24$ patterns which may still be valid:

$\begin{array}{rl}
\text{I} & AAA \\
\text{I} & AII \\
\text{I} & EAE \\
\text{I} & EIO \\
\text{I} & AAI \\
\text{I} & EAO \\
\end{array}
\qquad
\begin{array}{rl}
\text{II} & EAE \\
\text{II} & AEE \\
\text{II} & AOO \\
\text{II} & EIO \\
\text{II} & EAO \\
\text{II} & AEO \\
\end{array}
\qquad
\begin{array}{rl}
\text{III} & AAI \\
\text{III} & AII \\
\text{III} & IAI \\
\text{III} & EAO \\
\text{III} & EIO \\
\text{III} & OAO \\
\end{array}
\qquad
\begin{array}{rl}
\text{IV} & AAI \\
\text{IV} & AEE \\
\text{IV} & EAO \\
\text{IV} & EIO \\
\text{IV} & IAI \\
\text{IV} & AEO \\
\end{array}$


Proof
From Elimination of all but 48 Categorical Syllogisms as Invalid there are $12$ possible patterns of categorical syllogism per figure:

$\begin{array}{cccccc}
AAA & AAI & AEE & AEO & AII & AOO \\
EAE & EAO & EIO & IAI & IEO & OAO \\
\end{array}$


Figure $\text I$
Consider Figure $\text I$:




  Major Premise:  

$\map {\mathbf \Phi_1} {M, P}$


  Minor Premise:  

$\map {\mathbf \Phi_2} {S, M}$


  Conclusion:  

$\map {\mathbf \Phi_3} {S, P}$


From Valid Syllogism in Figure I needs Affirmative Minor Premise and Universal Major Premise, the patterns:

$AEE$, $AEO$, $AOO$ and $IEO$
can be eliminated as they all have a negative minor premise, and:

$IAI$ and $OAO$
can be eliminated as they all have a particular major premise.

Thus the only patterns in Figure $\text I$ that may be valid are:

$\begin{array}{rl}
\text{I} & AAA \\
\text{I} & AII \\
\text{I} & EAE \\
\text{I} & EIO \\
\text{I} & AAI \\
\text{I} & EAO \\
\end{array}$
$\Box$


Figure $\text {II}$
Consider Figure $\text {II}$:




  Major Premise:  

$\map {\mathbf \Phi_1} {P, M}$


  Minor Premise:  

$\map {\mathbf \Phi_2 } {S, M}$


  Conclusion:  

$\map {\mathbf \Phi_3} {S, P}$


From Valid Syllogism in Figure II needs Negative Conclusion and Universal Major Premise, the patterns:

$AAA$, $AAI$, $AII$ and $IAI$
can be eliminated as they all have an affirmative conclusion, and:

$IEO$ and $OAO$
can be eliminated as they all have a particular major premise.

Thus the only patterns in Figure $\text {II}$ that may be valid are:

$\begin{array}{rl}
\text{II} & EAE \\
\text{II} & AEE \\
\text{II} & AOO \\
\text{II} & EIO \\
\text{II} & EAO \\
\text{II} & AEO \\
\end{array}$
$\Box$


Figure $\text {III}$
Consider Figure $\text {III}$:




  Major Premise:  

$\map {\mathbf \Phi_1} {M, P}$


  Minor Premise:  

$\map {\mathbf \Phi_2} {M, S}$


  Conclusion:  

$\map {\mathbf \Phi_3} {S, P}$


From Valid Syllogism in Figure III needs Particular Conclusion and if Negative then Negative Major Premise, the patterns:

$AAA$, $AEE$ and $EAE$
can be eliminated as they all have a universal conclusion, and:

$AEO$, $AOO$ and $IEO$
can be eliminated as they all have a negative minor premise.

Thus the only patterns in Figure $\text {III}$ that may be valid are:

$\begin{array}{rl}
\text{III} & AAI \\
\text{III} & AII \\
\text{III} & IAI \\
\text{III} & EAO \\
\text{III} & EIO \\
\text{III} & OAO \\
\end{array}$
$\Box$


Figure $\text {IV}$
Consider Figure $\text {IV}$:




  Major Premise:  

$\map {\mathbf \Phi_1} {P, M}$


  Minor Premise:  

$\map {\mathbf \Phi_2} {M, S}$


  Conclusion:  

$\map {\mathbf \Phi_3} {S, P}$


From Valid Syllogisms in Figure IV, the patterns:

$AII$ and $EOO$
can be eliminated as they have an affirmative major premise and a particular minor premise.

$IEO$ and $OAO$
can be eliminated as they have a negative conclusion and a particular major premise.

$AAA$ and $EAE$
can be eliminated as they have a universal conclusion and an affirmative minor premise.

Thus the only patterns in Figure $\text {IV}$ that may be valid are:

$\begin{array}{rl}
\text{IV} & AAI \\
\text{IV} & AEE \\
\text{IV} & EAO \\
\text{IV} & EIO \\
\text{IV} & IAI \\
\text{IV} & AEO \\
\end{array}$
$\Box$

It remains to be established whether these $24$ patterns actually do represent valid categorical syllogisms.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism




