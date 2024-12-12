# 

Source: https://proofwiki.org/wiki/Equiangular_Right_Triangles_are_Similar



Theorem
Equiangular right triangles are similar.


Proof 1
This is an instance of the theorem Equiangular Triangles are Similar.
$\blacksquare$


Proof 2
Let $ABC$ be an arbitrary right triangle with $\angle ABC$ a right angle.
Construct a straight line from $A$ parallel to $BC$.
In the words of Euclid:

Through a given point to draw a straight line parallel to a given straight line.
(The Elements: Book $\text{I}$: Proposition $31$)

Construct a second straight line from $C$ parallel to $AB$, meeting the first straight line at $D$.
By Quadrilateral is Parallelogram iff Both Pairs of Opposite Sides are Equal or Parallel:

$\Box ABCD$ is a parallelogram.
By definition of rectangle, and from Rectangle is Parallelogram:

$\Box ABCD$ is a rectangle.
By construction, $AC$ is a diameter of $\Box ABCD$.



Let $H$ be an arbitrary point on $AC$.
Constuct $EHF$ parallel to $BC$ intersecting $AB$ at $F$ and $CD$ at $H$.
Constuct $DGI$ parallel to $AB$ intersecting $AD$ at $G$ and $BC$ at $I$.
Hence by construction $EHF$ and $DGI$ are both parallel to the sides of $\Box ABCD$.
By Triangle Side-Side-Side Congruence:

$\triangle ABC \cong \triangle ADC$
so:

$\angle BAC = \angle DCA$
$\angle DAC = \angle ACB$
By Parallelism implies Equal Corresponding Angles:

$\angle AHF = \angle ACB$
Because the diameter of each is shared, by Triangle Angle-Side-Angle Congruence:

$\triangle AFH \cong \triangle AGH$
$\triangle HIC \cong \triangle HEC$
For the same reasons and also by construction:  

$\triangle ABC \cong \triangle ADC$

By definition of congruence, $\Box ABCD$ is composed of two parts of equal area:

$\map \AA {\triangle AFH} + \map \AA {\Box FBIH} + \map \AA {\triangle HIC}$
$\map \AA {\triangle AGH} + \map \AA {\Box GHED} + \map \AA {\triangle HEC}$
By subtraction, we obtain:

$\map \AA {\Box FBIH} = \map \AA {\Box GHED}$
From Area of Rectangle:

$FH \cdot HI = GH \cdot HE$
Rearranging:

$\dfrac {FH} {GH} = \dfrac {HE} {HI}$
Thus, corresponding sides within each right triangle have equal ratios.
and also corresponding sides compared between two right triangle have equal ratios:

$\dfrac {FH} {HE} = \dfrac {GH} {HI}$

We can extend this result to the hypotenuse:

In the above diagram, the altitude of $\triangle ABC$ is $CD$.
By Perpendicular in Right-Angled Triangle makes two Similar Triangles:

$\triangle ADC \sim \triangle CDB$
By what we have shown above:

$\dfrac {AC} {BC} = \dfrac {AD} {CD} = \dfrac {CD} {BD}$
Rearranging:

$\dfrac {BC} {CD} = \dfrac {AC} {AD}$
which yields the result.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: If this resource contains the actual proof as given in Proof 2, then this citation needs to be transferred into that page.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2020: David Acheson: The Wonder Book of Geometry: Chapter $8$ Imagine My Exultation, Watson ...




