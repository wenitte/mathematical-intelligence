# 

Source: https://proofwiki.org/wiki/Intersection_with_Subclass_is_Subclass



Theorem
Let $A$ and $B$ be classes.

Then:

$A \subseteq B \iff A \cap B = A$
where:

$A \subseteq B$ denotes that $A$ is a subclass of $B$
$A \cap B$ denotes the intersection of $A$ and $B$.


Proof
Let $A \cap B = A$.
Then by the definition of class equality:

$A \subseteq A \cap B$
Thus:














\(\ds x\)

\(\in\)







\(\ds A\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds A \cap B\)





Definition of Subclass: $A \subseteq A \cap B$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds A\)





Definition of Class Intersection












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds B\)





Definition of Conjunction








\(\ds \leadsto \ \ \)





\(\ds A\)

\(\subseteq\)







\(\ds B\)





Definition of Subclass



$\Box$

Now let $A \subseteq B$.














\(\ds x\)

\(\in\)







\(\ds A \cap B\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds A\)





Definition of Class Intersection












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds A\)





Definition of Conjunction








\(\ds \leadsto \ \ \)





\(\ds A \cap B\)

\(\subseteq\)







\(\ds A\)





Definition of Subclass




We also have:















\(\ds x\)

\(\in\)







\(\ds A\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds A\)


















\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B\)





Definition of Subclass








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds A \cap B\)





Definition of Class Intersection





So as we have:














\(\ds A \cap B\)

\(\subseteq\)







\(\ds A\)




















\(\ds A\)

\(\subseteq\)







\(\ds A \cap B\)









it follows from the definition of class equality that:

$A \cap B = A$
$\blacksquare$


Also see
Union with Superclass is Superclass


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 5$ The union axiom: Exercise $5.6. \ \text {(e)}$




