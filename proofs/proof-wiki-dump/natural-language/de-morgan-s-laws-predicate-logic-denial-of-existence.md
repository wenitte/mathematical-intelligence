# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Predicate_Logic)/Denial_of_Existence



Theorem
Let $\forall$ and $\exists$ denote the universal quantifier and existential quantifier respectively.
Then:

$\forall x: \neg \map P x \dashv \vdash \neg \paren {\exists x: \map P x}$
If everything is not, there exists nothing that is.


Proof
By the tableau method of natural deduction:


$\forall x: \neg \map P x \vdash \neg \paren {\exists x: \map P x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\forall x: \neg \map P x$

Premise

(None)




2


2

$\exists x: \map P x$

Assumption

(None)




3


2

$\map P {\mathbf a}$

Existential Instantiation

2

for an arbitrary $\mathbf a$


4


1

$\neg \map P {\mathbf a}$

Universal Instantiation

3




5


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 4




6


1

$\neg \paren {\exists x: \map P x}$

Proof by Contradiction: $\neg \II$

2 – 5

Assumption 2 has been discharged
$\Box$

By the tableau method of natural deduction:


$\neg \paren {\exists x: \map P x} \vdash \forall x: \neg \map P x$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {\exists x: \map P x}$

Premise

(None)




2


2

$\map P {\mathbf a}$

Assumption

(None)

for some arbitrary $\mathbf a$


3


2

$\exists x: \map P x$

Existential Generalisation

2




4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 3




5


1

$\neg \map P {\mathbf a}$

Proof by Contradiction: $\neg \II$

2 – 4

Assumption 2 has been discharged


6


1

$\forall x: \neg \map P x$

Universal Generalisation

5

as $\mathbf a$ was arbitrary
$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 3.1 \ \text{(ii)}$: Statements and conditions; quantifiers
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{III}$: The Logic of Predicates $(1): \ 3$: Quantifiers: Relations between quantifiers $2$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability: $\S 2.1$




