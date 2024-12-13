# 

Source: https://proofwiki.org/wiki/Ordering_on_Natural_Numbers_is_Trichotomy



Theorem
Let $\N$ be the natural numbers.
Let $<$ be the (strict) ordering on $\N$.

Then exactly one of the following is true:

$(1): \quad a = b$
$(2): \quad a > b$
$(3): \quad a < b$
That is, $<$ is a trichotomy on $\N$.


Proof
Applying the definition of $<$, the theorem becomes:

Exactly one of the following is true:

$(1): \quad a = b$
$(2): \quad \exists n \in \N_{>0} : b + n = a$
$(3): \quad \exists n \in \N_{>0} : a + n = b$

We will use the principle of Mathematical Induction.
Let $P \left({a}\right)$ be the proposition that exactly one of the above is true, for all natural numbers $b$, for fixed natural number $a$.


Basis for the Induction
We will prove that the proposition is true for $a = 0$.
Using Proof by Cases, we divide the proposition into two cases.


Case 1: $b = 0$
$(1)$ is true
It follows trivially from the values of $a$ and $b$.


$(2)$ is false
Aiming for a contradiction, suppose $c$ is a non-zero natural number such that:

$b + c = a$
Substituting the values of $a$ and $b$, we obtain:

$0 + c = 0$
By Natural Number Addition Commutes with Zero, we can simplify the equation to:

$c = 0$
which is a contradiction of the assumption that $c$ is non-zero.


$(3)$ is false
Aiming for a contradiction, suppose $c$ is an non-zero natural number such that:

$a + c = b$
Substituting the values of $a$ and $b$, we obtain:

$0 + c = 0$
By Natural Number Addition Commutes with Zero, we can simplify the equation to:

$c = 0$
which is a contradiction of the assumption that $c$ is non-zero.


Case 2: $b \ne 0$.
$(1)$ is false
It follows trivially from the fact that $a = 0$.


$(2)$ is false
Aiming for a contradiction, suppose $c$ is an non-zero natural number such that:

$b + c = a$
Substituting the values of $a$, we obtain:

$b + c = 0$
By Non-Successor Element of Peano Structure is Unique, there exists a natural number $d$ such that:

$s \left({d}\right) = c$
where $s$ denotes the successor mapping.
Therefore, we have:

$b + s \left({d}\right) = 0$
Applying the definition of addition in Peano structure, we get:

$s \left({b + d}\right) = 0$
which is a contradiction of $(P4)$: $0$ is not in the image of $s$.


$(3)$ is true
By Natural Number Addition Commutes with Zero, we have:

$a + b = b$
The result follows.


Inductive hypothesis
It is now assumed that the proposition is true for $a = k$, where $k$ is a natural number.
That is, for all natural numbers $b$, exactly one of the following is true:

$(1): \quad k = b$
$(2): \quad k > b$
$(3): \quad k < b$

Then, it is to be proved that the proposition is true for $a = s \left({k}\right)$.
That is, for all natural numbers $b$, exactly one of the following is true:

$(1'): \quad s \left({k}\right) = b$
$(2'): \quad s \left({k}\right) > b$
$(3'): \quad s \left({k}\right) < b$


Inductive step
We have:














\(\ds s \left({k}\right)\)

\(=\)







\(\ds s \left({k + 0}\right)\)





Definition of Addition in Peano Structure














\(\ds \)

\(=\)







\(\ds k + s \left({0}\right)\)





Definition of Addition in Peano Structure














\(\ds \)

\(=\)







\(\ds k + 1\)





Definition of One





Case 1: $k = b$
In this case:














\(\ds s \left({k}\right)\)

\(=\)







\(\ds k + 1\)




















\(\ds \)

\(=\)







\(\ds b + 1\)











$(1')$ is false
Aiming for a contradiction, suppose $(1')$ is true.
Then:














\(\ds s \left({k}\right)\)

\(=\)







\(\ds b\)





Assumption














\(\ds b + 1\)

\(=\)







\(\ds b\)




















\(\ds 1\)

\(=\)







\(\ds 0\)





Natural Number Addition is Cancellable














\(\ds s \left({0}\right)\)

\(=\)







\(\ds 0\)





Definition of One



which is a contradiction of $(P4)$: $0$ is not in the image of $s$.


$(2')$ is true
This is apparent from the definition of $>$.


$(3')$ is false
Aiming for a contradiction, suppose $(3')$ is true.
Let $c$ be a non-zero natural number such that:

$s \left({k}\right) + c = b$

Then:














\(\ds s \left({k}\right) + c\)

\(=\)







\(\ds b\)





Assumption














\(\ds \left({b + 1}\right) + c\)

\(=\)







\(\ds b\)




















\(\ds b + \left({c + 1}\right)\)

\(=\)







\(\ds b\)





Natural Number Addition is Associative and Natural Number Addition is Commutative














\(\ds c + 1\)

\(=\)







\(\ds 0\)





Natural Number Addition is Cancellable














\(\ds c + s \left({0}\right)\)

\(=\)







\(\ds 0\)





Definition of One














\(\ds s \left({c}\right)\)

\(=\)







\(\ds 0\)





Definition of Addition in Peano Structure



which is a contradiction of $(P4)$: $0$ is not in the image of $s$.


Case 2: $k < b$ and $s \left({k}\right) = b$
$(1')$ is true
This follows from the assumption.


$(2')$ is false
Aiming for a contradiction, suppose $(2')$ is true.
Let $c$ be a non-zero natural number such that:

$s \left({k}\right) = b + c$

Then:














\(\ds s \left({k}\right)\)

\(=\)







\(\ds b + c\)





Assumption














\(\ds b\)

\(=\)







\(\ds b + c\)





Assumption














\(\ds 0\)

\(=\)







\(\ds c\)





Natural Number Addition is Cancellable



which is a contradiction of our assumption that $c$ is non-zero.


$(3')$ is false
Aiming for a contradiction, suppose $(3')$ is true.
Let $c$ be a non-zero natural number such that:

$s \left({k}\right) + c = b$

Then:














\(\ds s \left({k}\right) + c\)

\(=\)







\(\ds b\)





Assumption














\(\ds b + c\)

\(=\)







\(\ds b\)





Assumption














\(\ds c\)

\(=\)







\(\ds 0\)





Natural Number Addition is Cancellable



which is a contradiction of our assumption that $c$ is non-zero.


Case 3: $k < b$ and $s \left({k}\right) \ne b$
From the definition of $<$, we have the existence of a non-zero natural number $m$ such that:

$k + m = b$
By Non-Successor Element of Peano Structure is Unique, there exists a natural number $p$ such that:

$s \left({p}\right) = m$
Substituting:

$k + s \left({p}\right) = b$
Applying the definition of addition in Peano structure, we get:

$s \left({k + p}\right) = b$


$(1')$ is false
It is assumed in this case that:

$s \left({k}\right) \ne b$
Therefore, $(1')$ is false.


$(2')$ is false
Aiming for a contradiction, suppose $(2')$ is true.
Let $c$ be a non-zero natural number such that:

$s \left({k}\right) = b + c$
By Non-Successor Element of Peano Structure is Unique, there exists a natural number $d$ such that:

$s \left({d}\right) = c$

Then:














\(\ds s \left({k}\right)\)

\(=\)







\(\ds b + c\)





Assumption














\(\ds \)

\(=\)







\(\ds \left({k + s \left({p}\right)}\right) + s \left({d}\right)\)




















\(\ds \)

\(=\)







\(\ds k + \left({s\left({p}\right) + s \left({d}\right)}\right)\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds k + s\left({p + s \left({d}\right)}\right)\)





Definition of Addition in Peano Structure














\(\ds \)

\(=\)







\(\ds s\left({k + \left({p + s \left({d}\right)}\right)}\right)\)





Definition of Addition in Peano Structure














\(\ds \)

\(=\)







\(\ds s\left({k + \left({s \left({p + d}\right)}\right)}\right)\)





Definition of Addition in Peano Structure














\(\ds k\)

\(=\)







\(\ds k + \left({s \left({p + d}\right)}\right)\)





$(P3)$$:$ $s$ is injective














\(\ds 0\)

\(=\)







\(\ds s \left({p + d}\right)\)





Natural Number Addition is Cancellable



which is a contradiction of $(P4)$: $0$ is not in the image of $s$.


$(3')$ is true
We have:














\(\ds s \left({k + p}\right)\)

\(=\)







\(\ds b\)




















\(\ds s \left({p + k}\right)\)

\(=\)







\(\ds b\)





Natural Number Addition is Commutative














\(\ds p + s \left({k}\right)\)

\(=\)







\(\ds b\)





Definition of Addition in Peano Structure














\(\ds s \left({k}\right) + p\)

\(=\)







\(\ds b\)





Natural Number Addition is Commutative



The result follows.


Case 4: $k > b$
From the definition of $>$, we have the existence of a non-zero natural number $m$ such that:

$k = b + m$
By Non-Successor Element of Peano Structure is Unique, there exists a natural number $p$ such that:

$s \left({p}\right) = m$
Substituting:

$k = b + s \left({p}\right)$
By applying $s$ to both sides, we obtain:

$s \left({k}\right) = s \left({b + s \left({p}\right)}\right)$
Applying the definition of addition in Peano structure, we get:

$s \left({k}\right) = b + s \left({s \left({p}\right)}\right)$


$(1')$ is false
Aiming for a contradiction, suppose $(1')$ is true.
Then:














\(\ds s \left({k}\right)\)

\(=\)







\(\ds b\)





Assumption














\(\ds b + s \left({s \left({p}\right)}\right)\)

\(=\)







\(\ds b\)




















\(\ds s \left({s \left({p}\right)}\right)\)

\(=\)







\(\ds 0\)





Natural Number Addition is Cancellable



which is a contradiction of $(P4)$: $0$ is not in the image of $s$.


$(2')$ is true
We have:

$s \left({k}\right) = b + s \left({s \left({p}\right)}\right)$
The result follows.


$(3')$ is false
Aiming for a contradiction, suppose $(3')$ is true.
Let $c$ be a non-zero natural number such that:

$s \left({k}\right) + c = b$

Then:














\(\ds s \left({k}\right) + c\)

\(=\)







\(\ds b\)





Assumption














\(\ds \left({b + s \left({s \left({p}\right)}\right)}\right) + c\)

\(=\)







\(\ds b\)




















\(\ds b + \left({c + s \left({s \left({p}\right)}\right)}\right)\)

\(=\)







\(\ds b\)





Natural Number Addition is Associative and Natural Number Addition is Commutative














\(\ds \left({c + s \left({s \left({p}\right)}\right)}\right)\)

\(=\)







\(\ds 0\)





Natural Number Addition is Cancellable














\(\ds s \left({c + s \left({p}\right)}\right)\)

\(=\)







\(\ds 0\)





Definition of Addition in Peano Structure



which is a contradiction of $(P4)$: $0$ is not in the image of $s$.
$\blacksquare$


Sources
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 4$: Number systems $\text{I}$: Peano's Axioms




